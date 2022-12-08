import { ChatsAPI, MessagesAPI, PeopleAPI, MediaAPI } from '../api/API';
import { ChatDataProvider } from '../api/ChatDataProvider';
import { ChatType, Chat, ChatInfo, Message, MessageReaction, MessageReceiptInfo, Person, GroupEventMessageType, GroupMember, MediaItem, MessageType, ReferencedMessage, GroupRole } from '../api/Model';

import { Database, OPEN_READONLY } from "sqlite3";
import * as path from "path";
import * as protobuf from "protobufjs";

import * as DB from "./WhatsAppDatabase";
import { receiptinfo } from "./protobuf/receiptinfo";
import { message } from "./protobuf/message";
import { mediaitem } from "./protobuf/mediaitem";
import Long = require("long");

export class WhatsAppDataProvider implements ChatDataProvider {
    readonly chatDB: Database;
    readonly contactsDB: Database;
    readonly callHistoryDB: Database;
    readonly protobufRoots: {
        receiptInfo: protobuf.Root,
        message: protobuf.Root,
        mediaItem: protobuf.Root
    };

    readonly plattformName = "whatsapp";
    readonly pathRoot: string;

    readonly id: number;

    readonly chats: WhatsAppChatsAPI
    readonly messages: WhatsAppMessagesAPI
    readonly people: WhatsAppPeopleAPI
    readonly media: WhatsAppMediaAPI

    private constructor(
        chatDB: Database,
        contactsDB: Database,
        callHistoryDB: Database,
        pathRoot: string,
        id: number
    ) {
        this.chatDB = chatDB;
        this.contactsDB = contactsDB;
        this.callHistoryDB = callHistoryDB;
        this.protobufRoots = {
            receiptInfo: protobuf.loadSync(DB.CHAT_DB.MESSAGE_INFO_TABLE.PROTO_FILE_PATH),
            message: protobuf.loadSync(DB.CHAT_DB.MESSAGE_TABLE.PROTO_FILE_PATH),
            mediaItem: protobuf.loadSync(DB.CHAT_DB.MEDIA_ITEM_TABLE.PROTO_FILE_PATH)
        };
        this.pathRoot = pathRoot;

        this.id = id;

        this.chats = new WhatsAppChatsAPI(this);
        this.messages = new WhatsAppMessagesAPI(this);
        this.people = new WhatsAppPeopleAPI(this);
        this.media = new WhatsAppMediaAPI(this);
    }

    static getFactoryForPath(forPath: string, id: number): () => Promise<WhatsAppDataProvider> {
        return async () => {
            return Promise.all([
                DB.promiseForDB(path.join(forPath, DB.CHAT_DB.DB_FILE_NAME), OPEN_READONLY),
                DB.promiseForDB(path.join(forPath, DB.CONTACTS_DB.DB_FILE_NAME), OPEN_READONLY),
                DB.promiseForDB(path.join(forPath, DB.CALL_HISTORY_DB.DB_FILE_NAME), OPEN_READONLY)
            ]).then((dbs) => new WhatsAppDataProvider(dbs[0], dbs[1], dbs[2], forPath, id));
        };
    }
}

class WhatsAppChatsAPI implements ChatsAPI {
    private provider: WhatsAppDataProvider;

    constructor(provider: WhatsAppDataProvider) {
        this.provider = provider;
    }

    async getChats(params?: {
        type?: ChatType,
        sort?: string,
        limit?: number,
        page?: number,
        fromDate?: Date
    }): Promise<Chat[]> {
        let sql = `select * from ${DB.CHAT_DB.CHAT_TABLE.NAME} `;

        // Set defaults for values that weren't set
        if(!params) {
            params = {
                sort: 'date-',
                limit: 50,
                page: 1
            }
        }
        if(!params.sort) params.sort = 'date-';
        if(!params.limit) params.limit = 50;
        if(!params.page) params.page = 1;

        // Where
        const loadAsc = params.sort.slice(-1) == '+';

        let whereStatements: {
            column: string,
            value: any,
            relation: string
        }[] = [];
        if(params.type) {
            whereStatements.push({
                column: DB.CHAT_DB.CHAT_TABLE.COLUMN_CHAT_TYPE,
                value: DB.CHAT_DB.CHAT_TABLE.getDBSessionTypeForChatType(params.type),
                relation: '='
            });
        }
        if(params.fromDate) {
            const dateAsMacEpoch = DB.detDBDateTimeFromDate(params.fromDate);
            const relation = loadAsc ? '>=' : '<=';

            whereStatements.push({
                column: DB.CHAT_DB.CHAT_TABLE.COLUMN_LAST_MESSAGE_DATE,
                value: dateAsMacEpoch,
                relation: `${relation}`
            });
        }

        let { statement, sqlParams } = DB.concatWhereStatements(whereStatements);
        if(statement !== '') statement = 'where ' + statement;

        // Pagination
        const orderBy = params.sort.substring(0, params.sort.length-1);
        let orderByColumn = '';
        switch(orderBy) {
            case 'date':
                orderByColumn = DB.CHAT_DB.CHAT_TABLE.COLUMN_LAST_MESSAGE_DATE;
                break;
            case 'id':
                orderByColumn = 'Z_PK';
                break;
            default:
                throw new Error(`Unknown sort param ${params.sort}`);
        }
        sql += `where ${DB.efficientPagination(
            orderByColumn,
            DB.CHAT_DB.CHAT_TABLE.NAME,
            loadAsc ? 'asc' : 'desc',
            statement
        )}`;

        sqlParams.$limit = params.limit;
        sqlParams.$offset = (params.page-1)*params.limit;
        
        return this.loadChatsForSQL(sql, sqlParams);
    }

    async getChatByID(id: string): Promise<Chat> {
        const sql = `select * from ${DB.CHAT_DB.CHAT_TABLE.NAME} where Z_PK=$id`;
        const sqlParams = {
            $id: id
        }

        return this.loadChatsForSQL(sql, sqlParams)
            .then((chats) => {
                if(chats.length !== 1) throw Error(`Should get one chat for ID ${id} but got ${chats.length}`);

                return chats[0];
            });
    }

    async getChatInfoForChat(id: string): Promise<WhatsAppChatInfo> {
        let membersSQL = `select * from ${DB.CHAT_DB.GROUP_MEMBER_TABLE.NAME} where ZCHATSESSION = $chatsession and ZISACTIVE = 1`;

        let groupInfoSQL = `select * from ${DB.CHAT_DB.GROUP_INFO_TABLE.NAME} where ZCHATSESSION = $chatsession`;

        let sqlParams = {
            $chatsession: id
        };

        return this.loadChatInfoForSQL(membersSQL, groupInfoSQL, sqlParams);
    }

    async getMessagesForChat(id: string, params?: {
            sort?: string;
            limit?: number;
            page?: number;
            fromID?: string;
            fromDate?: Date;
    }): Promise<Message[]> {
        let sql = `select * from ${DB.CHAT_DB.MESSAGE_TABLE.NAME} `;

        // Set defaults for values that weren't set
        if(!params) {
            params = {
                sort: '-',
                limit: 50,
                page: 1
            }
        }
        if(!params.sort) params.sort = '-';
        if(!params.limit) params.limit = 50;
        if(!params.page) params.page = 1;

        const loadAsc = params.sort.slice(-1) == '+';

        // Where
        let whereStatements: {
            column: string,
            value: any,
            relation: string
        }[] = [];
        if(params.fromDate) {
            const dateAsMacEpoch = DB.detDBDateTimeFromDate(params.fromDate);
            const relation = loadAsc ? '>=' : '<=';

            whereStatements.push({
                column: DB.CHAT_DB.CHAT_TABLE.COLUMN_LAST_MESSAGE_DATE,
                value: dateAsMacEpoch,
                relation: `${relation}`
            });
        }
        if(params.fromID) {
            const relation = loadAsc ? '>=' : '<=';

            whereStatements.push({
                column: 'Z_PK',
                value: params.fromID,
                relation: `${relation}`
            });
        }
        whereStatements.push({
            column: DB.CHAT_DB.MESSAGE_TABLE.COLUMN_CHAT_SESSION,
            value: id,
            relation: '='
        });

        let { statement, sqlParams } = DB.concatWhereStatements(whereStatements);
        if(statement !== '') statement = 'where ' + statement;
       
        // Pagination
        sql += `where ${DB.efficientPagination(
            DB.CHAT_DB.MESSAGE_TABLE.COLUMN_MESSAGE_DATE,
            DB.CHAT_DB.MESSAGE_TABLE.NAME,
            loadAsc ? 'asc' : 'desc',
            statement
        )}`;

        sqlParams.$limit = params.limit;
        sqlParams.$offset = (params.page-1)*params.limit;

        return this.loadMessagesForSQL(sql, sqlParams, loadAsc);
    }

    async getGroupMemberForID(id: string): Promise<WhatsAppGroupMember> {
        const sql = `select * from ${DB.CHAT_DB.GROUP_MEMBER_TABLE.NAME} where Z_PK=$id`;
        const params = { $id: id };
        return new Promise<any[]>((resolve, reject) => {
            this.provider.chatDB.all(sql, params, (err: Error, rows: any[]) => {
                if(err) reject(err);

                resolve(rows);
            })
        }).then((rows) => {
            if(rows.length !== 1) throw Error(`Expected one group member but got ${rows.length} for ID ${id}`);

            return WhatsAppGroupMember.createWhatsAppGroupMemberFromRow(rows[0], this.provider);
        })
    }

    /**
     * Return a promise for WhatsAppChats for a specified `sql` query.
     * 
     * @param sql The SQL to execute
     * @returns A promise for the requested WhatsAppChats
     */
    private async loadChatsForSQL(sql: string, params: any): Promise<WhatsAppChat[]> {
        return new Promise((resolve, reject) => {
            this.provider.chatDB.all(sql, params, (err: Error | null, rows: any[]) => {
                if(err) reject(err);

                let chats: WhatsAppChat[] = [];

                if(!rows) return chats;
                
                rows.forEach((row) => {
                    chats.push(WhatsAppChat.createWhatsAppChatFromRow(row, this.provider.id));
                });

                resolve(chats);
            })
        });
    }

    private async loadChatInfoForSQL(membersSQL: string, chatInfoSQL: string, sqlParams: any): Promise<WhatsAppChatInfo> {
        return Promise.all([
            new Promise((resolve, reject) =>
                this.provider.chatDB.all(membersSQL, sqlParams, (err: Error, rows: any[]) => {
                    if(err) reject(err);

                    resolve(rows.map((row) => WhatsAppGroupMember.createWhatsAppGroupMemberFromRow(row, this.provider)))
                })
            ),
            new Promise((resolve, reject) =>
                this.provider.chatDB.all(chatInfoSQL, sqlParams, (err: Error, rows: any[]) => {
                    if(err) reject(err);
                    if(rows.length !== 1) reject(`Expected exactly one returned row but got ${rows.length}`);

                    resolve(rows[0]);
                })
            )
        ]).then((values) => {
            return WhatsAppChatInfo.createWhatsAppChatInfoFromRow(values[1], values[0] as WhatsAppGroupMember[], this.provider.id);
        });
    }

    private async loadMessagesForSQL(sql: string, sqlParams: any, loadAsc: boolean): Promise<WhatsAppMessage[]> {
        let direction = loadAsc ? 1 : -1;
        return new Promise<any[]>((resolve, reject) => {
            this.provider.chatDB.all(sql, sqlParams, (err: Error | null, rows: any[]) => {
                if(err) reject(err);

                resolve(rows);
            })
        }).then((rows) => {
            let messagePromisses: Promise<WhatsAppMessage>[] = [];

            if(!rows) return Promise.all(messagePromisses);

            rows.forEach((row) => {
                messagePromisses.push(WhatsAppMessage.createWhatsAppMessageFromRow(row, this.provider));
            });

            return Promise.all(messagePromisses);
        }).then((messages: WhatsAppMessage[]) => {
            return messages.sort((a,b) => direction*(a.messageDate.valueOf() - b.messageDate.valueOf()))
        });
    }
}

class WhatsAppMessagesAPI implements MessagesAPI {
    private provider: WhatsAppDataProvider;
    private loadedMessageInfos: {[index:string]: WhatsAppMessageInfo} = {};

    constructor(dataProvider: WhatsAppDataProvider) {
        this.provider = dataProvider;
    }

    async getMessageByID(id: string): Promise<Message> {
        const sql = `select * from ${DB.CHAT_DB.MESSAGE_TABLE.NAME} where Z_PK=$id`;
        const sqlParams = { $id: id }

        return new Promise((resolve, reject) => {
            this.provider.chatDB.all(sql, sqlParams, (err: Error | null, rows: any[]) => {
                if(err) reject(err);

                if(rows.length !== 1) reject(`Should get one message for ID ${id} but got ${rows.length}`);

                resolve(WhatsAppMessage.createWhatsAppMessageFromRow(rows[0], this.provider));
            });
        });
    }
        
    async getReceiptInfoForMessage(id: string): Promise<MessageReceiptInfo[]> {
        if(this.loadedMessageInfos[id]) return this.loadedMessageInfos[id].receiptInfo;

        return this.loadMessageInfoForMessage(id)
            .then((info: {
                receiptInfo: MessageReceiptInfo[],
                reactions: MessageReaction[]
            }) => info.receiptInfo);
    }
        
    async getReactionsForMessage(id: string): Promise<MessageReaction[]> {
        if(this.loadedMessageInfos[id]) return this.loadedMessageInfos[id].reactions;

        return this.loadMessageInfoForMessage(id)
            .then((info: {
                receiptInfo: MessageReceiptInfo[],
                reactions: MessageReaction[]
            }) => info.reactions);
    }

    async getPollInfoForMessage(id: string): Promise<WhatsAppMessagePollInfo | undefined> {
        if(this.loadedMessageInfos[id]) return this.loadedMessageInfos[id].pollInfo;

        return this.loadMessageInfoForMessage(id)
            .then((info: {pollInfo?: WhatsAppMessagePollInfo}) => info.pollInfo);
    }
    
    private async loadMessageInfoForMessage(id: string): Promise<WhatsAppMessageInfo> {
        const sql = `select * from ${DB.CHAT_DB.MESSAGE_INFO_TABLE.NAME} where ZMESSAGE=$id`;
        const sqlParams = { $id: id }

        return new Promise((resolve, reject) => {
            return this.provider.chatDB.all(sql, sqlParams, (err: Error | null, rows: any[]) => {
                if(err) reject(err);

                if(rows.length > 1) reject(`More than one message info found for message ${id}`);

                try {
                    let messageInfo = WhatsAppMessageInfo.createMessageInfoFromRow(rows[0], this.provider);
                    resolve(messageInfo);
                } catch(err) {
                    reject(err);
                }
            });
        });
    }
}

class WhatsAppPeopleAPI implements PeopleAPI {
    private readonly provider: WhatsAppDataProvider

    constructor(dataProvider: WhatsAppDataProvider) {
        this.provider = dataProvider;
    }

    async getPeople(params?: {
        sort?: string;
        limit?: number;
        page?: number;
        phone?: string;
        name?: string;
        whatsAppJID?: string;
    }): Promise<Person[]> {
        let defaultParams = {
            sort: 'sort+',
            limit: 50,
            page: 1
        }
        const filteredParams = {
            ...defaultParams,
            ...params
        }

        if(filteredParams.whatsAppJID) return this.getPersonByID(filteredParams.whatsAppJID).then((person) => [person]);

        let sql = `select * from ${DB.CONTACTS_DB.ADDRESS_BOOK_TABLE.NAME} `;

        // Where
        const loadAsc = filteredParams.sort.slice(-1) == '+';

        let whereStatements: {
            column: string,
            value: any,
            relation: string
        }[] = [];
        if(filteredParams.phone) {
            whereStatements.push({
                column: DB.CONTACTS_DB.ADDRESS_BOOK_TABLE.COLUMN_PHONE,
                value: filteredParams.phone,
                relation: '='
            });
        }
        if(filteredParams.name) {
            whereStatements.push({
                column: DB.CONTACTS_DB.ADDRESS_BOOK_TABLE.COLUMN_FULL_NAME,
                value: filteredParams.name,
                relation: '='
            });
        }

        let { statement, sqlParams } = DB.concatWhereStatements(whereStatements);
        statement += `${statement !== '' ? ' and' : ''} ZWHATSAPPID is not null`;
        statement = 'where ' + statement;

        // Pagination
        const orderBy = filteredParams.sort.substring(0, filteredParams.sort.length-1);
        let orderByColumn = '';
        switch(orderBy) {
            case 'sort':
                orderByColumn = DB.CONTACTS_DB.ADDRESS_BOOK_TABLE.COLUMN_SORT;
                break;
            case 'id':
                orderByColumn = 'Z_PK';
                break;
            case 'name':
                orderByColumn = DB.CONTACTS_DB.ADDRESS_BOOK_TABLE.COLUMN_FULL_NAME;
                break;
            default:
                throw new Error(`Unknown param sort=${filteredParams.sort}`);
        }
        sql += `where ${DB.efficientPagination(
            orderByColumn,
            DB.CONTACTS_DB.ADDRESS_BOOK_TABLE.NAME,
            loadAsc ? 'asc' : 'desc',
            statement
        )}`;

        sqlParams.$limit = filteredParams.limit;
        sqlParams.$offset = (filteredParams.page-1)*filteredParams.limit;

        return this.loadPeopleForSQL(sql, sqlParams);
    }

    async getPersonByRowID(id: string): Promise<WhatsAppPerson> {
        const sql = `select * from ${DB.CONTACTS_DB.ADDRESS_BOOK_TABLE.NAME} where Z_PK=$id`;
        const sqlParams = {
            $id: id
        }

        return this.loadPeopleForSQL(sql, sqlParams)
            .then((people) => {
                if(people.length !== 1) throw Error(`Should get one person for Z_PK ${id} but got ${people.length}`);

                return people[0];
            });
    }

    async getPersonByID(jid: string): Promise<WhatsAppPerson> {
        const sql = `select * from ${DB.CONTACTS_DB.ADDRESS_BOOK_TABLE.NAME} where ZWHATSAPPID=$jid`;
        const sqlParams = {
            $jid: jid
        }

        return this.loadPeopleForSQL(sql, sqlParams)
            .then((people) => {
                if(people.length > 1) throw Error(`Should get one Person for JID ${jid} but got ${people.length}`);
                if(people.length === 0) return new WhatsAppPerson(jid, this.provider.id, '', jid, jid, undefined);

                return people[0];
            });
    }

    async getPersonByAppleContactID(id: string): Promise<WhatsAppPerson> {
        throw Error('Not implemented yet');
    }

    private async loadPeopleForSQL(sql: string, params: any): Promise<WhatsAppPerson[]> {
        return new Promise((resolve, reject) => {
            this.provider.contactsDB.all(sql, params, (err: Error | null, rows: any[]) => {
                if(err) reject(err);

                let people: WhatsAppPerson[] = [];

                if(!rows) return people;
                
                rows.forEach((row) => {
                    people.push(WhatsAppPerson.createWhatsAppPersonFromRow(row, this.provider.id));
                });

                resolve(people);
            })
        });
    }
}

class WhatsAppMediaAPI implements MediaAPI {
    private readonly provider: WhatsAppDataProvider

    constructor(provider: WhatsAppDataProvider) {
        this.provider = provider;
    }

    async getMediaItemByID(id: string): Promise<MediaItem> {
        throw Error('Not yet implemented');
    }

    /**
     * Get additional message data from the media item table.
     * This may be one of the following:
     * - `WhatsAppMediaItem` (aka an attached Image, Document, link etc)
     * - `WhatsAppReferencedMessage`.
     * 
     * Since there may be multiple present,
     * this returns an object of type `WhatsAppMessageMediaOrAdditionalInfo`
     * 
     * @param id The Z_PK of the row of ZWAMEDIAITEM to parse
     * @param messageType 
     * @throws Error if the protobuf in the `ZMETADATA` column fails to decode.
     */
    async getMessageMediaOrAdditionalInfoByMediaItemID(id: string, messageType: WhatsAppMessageType): Promise<WhatsAppMessageMediaOrAdditionalInfo> {
        let returnValue: WhatsAppMessageMediaOrAdditionalInfo = {};

        const sql = `SELECT * FROM ${DB.CHAT_DB.MEDIA_ITEM_TABLE.NAME} where Z_PK = $mediaitem`;
        let mediaItemRow: any = await new Promise((resolve, reject) => {
            this.provider.chatDB.all(sql, {$mediaitem: id}, (err: Error | null, rows: any[]) => {
                if(err) reject(err);
                if(!rows) reject(`Expected MediaItem but got none for media item ${id}`);

                if(rows.length !== 1) reject(`Expected one row for media item with ID ${id} but got ${rows.length}`);

                resolve(rows[0]);
            });
        });

        if(!mediaItemRow.ZMETADATA) {
            return {
                mediaItem: WhatsAppMediaItem.createMediaItemFromRow(mediaItemRow, this.provider)
            }
        }

        try {
            const MessageInfo = this.provider.protobufRoots.mediaItem.lookupType(DB.CHAT_DB.MEDIA_ITEM_TABLE.METADATA_PROTO_TYPE);

            const decoded = MessageInfo.decode(mediaItemRow.ZMETADATA) as mediaitem.IMetadata;

            switch(messageType) {
                case MessageType.IMAGE || MessageType.LINK || MessageType.VIDEO || MessageType.GIF || MessageType.STICKER || MessageType.LOCATION || MessageType.DOCUMENT:
                    returnValue.mediaItem = WhatsAppMediaItem.createMediaItemFromRowAndProtobuf(mediaItemRow, decoded, this.provider);
                    break;

                default:
                    break;
            }

            // Get referenced message, if any
            if(decoded.referencedMessageStanzaId)
                returnValue.referencedMessage = WhatsAppReferencedMessage.createReferencedMessageFromProtobuf(decoded, this.provider);
        } catch(e) {
            throw Error(`Got an error while trying to decode metadata for MediaItem with ID ${id}. Error: ${e}`);
        }

        return returnValue;
    }
}

type WhatsAppMessageMediaOrAdditionalInfo = {
    mediaItem?: WhatsAppMediaItem,
    referencedMessage?: WhatsAppReferencedMessage
}

export class WhatsAppChat implements Chat {
    readonly id: string;
    readonly providerID: number;
    readonly name: string;
    readonly chatType: WhatsAppChatType;

    readonly isArchived: boolean;
    readonly isHidden: boolean;
    readonly messageCount: number;
    readonly unreadCount: number;
    readonly lastMessagePreview: string;
    readonly lastMessageDate?: Date;

    readonly whatsAppJID: string;

    constructor(
        id: string,
        providerID: number,
        whatsAppJID: string,
        name: string,
        chatType: WhatsAppChatType,
        isArchived: boolean,
        isHidden: boolean,
        messageCount: number,
        unreadCount: number,
        lastMessagePreview: string,
        lastMessageDate?: Date
    ) {
        this.id = id;
        this.providerID = providerID;
        this.whatsAppJID = whatsAppJID;
        this.name = name;
        this.chatType = chatType;
        this.isArchived = isArchived;
        this.isHidden = isHidden;
        this.messageCount = messageCount;
        this.unreadCount = unreadCount;
        this.lastMessagePreview = lastMessagePreview;
        this.lastMessageDate = lastMessageDate;
    }

    static createWhatsAppChatFromRow(row: any, providerID: number) {
        if (typeof row.Z_PK !== "number")
            throw Error(`Z_PK needs to exists and be a number, but was ${row.Z_PK}`);
        
        let id = row.Z_PK;

        let isArchived: boolean;

        if (typeof row.ZARCHIVED !== "number")
        throw Error(`ZARCHIVED needs to exists and be a number, but was ${row.ZARCHIVED}`);
        if (row.ZARCHIVED === 0) {
            isArchived = false;
        } else if (row.ZARCHIVED === 1) {
            isArchived = true;
        } else {
            throw Error(`ZARCHIVED has unknown value ${row.Z_PK}`);
        }

        let isHidden: boolean;

        if (typeof row.ZHIDDEN !== "number")
            throw Error(`ZHIDDEN needs to exists and be a number, but was ${row.ZHIDDEN}`);
        if (row.ZHIDDEN === 0) {
            isHidden = false;
        } else if (row.ZHIDDEN === 1) {
            isHidden = true;
        } else {
            throw Error(`ZHIDDEN has unknown value ${row.ZHIDDEN}`);
        }

        if (typeof row.ZMESSAGECOUNTER !== "number")
            throw Error(`ZMESSAGECOUNTER needs to exists and be a number, but was ${row.ZMESSAGECOUNTER}`);
        let messageCount = row.ZMESSAGECOUNTER;

        if (typeof row.ZSESSIONTYPE !== "number")
            throw Error(`ZSESSIONTYPE needs to exists and be a number, but was ${row.ZSESSIONTYPE}`);
        let type = DB.CHAT_DB.CHAT_TABLE.getChatTypeFromDBSessionType(row.ZSESSIONTYPE);

        if (typeof row.ZUNREADCOUNT !== "number")
            throw Error(`ZUNREADCOUNT needs to exists and be a number, but was ${row.ZUNREADCOUNT}`);
        let unreadCount = row.ZUNREADCOUNT;

        let lastMessageDate: Date | undefined;
        if (row.ZLASTMESSAGEDATE)
            lastMessageDate = DB.getDateFromDBDateTime(row.ZLASTMESSAGEDATE);

        if (typeof row.ZCONTACTJID !== "string")
            throw Error(`ZCONTACTJID needs to exists and be a string, but was ${row.ZCONTACTJID}`);
        let whatsAppJID = row.ZCONTACTJID;

        let lastMessagePreview: string;

        if (typeof row.ZLASTMESSAGETEXT !== "string")
            lastMessagePreview = '';
        lastMessagePreview = row.ZLASTMESSAGETEXT;

        if (typeof row.ZPARTNERNAME !== "string")
            throw Error(`ZPARTNERNAME needs to exists and be a string, but was ${row.ZPARTNERNAME}`);
        let name = row.ZPARTNERNAME;

        return new WhatsAppChat(
            id,
            providerID,
            whatsAppJID,
            name,
            type,
            isArchived,
            isHidden,
            messageCount,
            unreadCount,
            lastMessagePreview,
            lastMessageDate
        );
    }
}

export type WhatsAppChatType = ChatType | DB.WhatsAppChatTypeExtension;

export class WhatsAppChatInfo implements ChatInfo {
    readonly id: string;
    readonly providerID: number;
    readonly chatID: string;
    readonly members: GroupMember[];
    readonly dateCreated?: Date;
    readonly creatorID?: string;
    readonly picture?: MediaItem;

    constructor(
        id: string,
        providerID: number,
        chatID: string,
        members: GroupMember[],
        dateCreated?: Date,
        creatorID?: string,
        picture?: MediaItem
    ) {
        this.id = id;
        this.providerID = providerID;
        this.chatID = chatID;
        this.members = members;
        this.dateCreated = dateCreated;
        this.creatorID = creatorID;
        this.picture = picture;
    }

    static createWhatsAppChatInfoFromRow(row: any, members: WhatsAppGroupMember[], providerID: number): WhatsAppChatInfo {
        if(typeof row.Z_PK !== 'number')
            throw new Error(`Z_PK needs to exist and be a number but was ${row.Z_PK}`);

        const id = row.Z_PK;

        if(typeof row.ZCHATSESSION !== 'number')
            throw new Error(`ZCHATSESSION needs to exist and be a number but was ${row.ZCHATSESSION}`);

        const chatID = row.ZCHATSESSION;

        if(typeof row.ZCREATIONDATE !== 'number')
            throw new Error(`ZCREATIONDATE needs to exist and be a number but was ${row.ZCREATIONDATE}`);
    
        const dateCreated = DB.getDateFromDBDateTime(row.ZCREATIONDATE);

        let creatorID: string | undefined = row.ZCREATORJID;

        return new WhatsAppChatInfo(id, providerID, chatID, members, dateCreated, creatorID);
    }
}

export class WhatsAppGroupMember implements GroupMember {
    readonly person: WhatsAppPerson;
    readonly role: GroupRole;
    readonly joinedDate?: Date;

    readonly senderKeySent?: boolean;

    constructor(
        person: WhatsAppPerson,
        role: GroupRole,
        joinedDate?: Date,
        senderKeySent?: boolean
    ) {
        this.person = person;
        this.role = role;
        this.joinedDate = joinedDate;
        this.senderKeySent = senderKeySent;
    }

    static async createWhatsAppGroupMemberFromRow(row: any, provider: WhatsAppDataProvider): Promise<WhatsAppGroupMember> {
        if(typeof row.ZISADMIN !== 'number')
            throw new Error(`ZISADMIN needs to exist and be a number but was ${row.ZISADMIN}`);

        let groupRole: GroupRole
        if(row.ZISADMIN == 0) {
            groupRole = GroupRole.MEMBER;
        } else if (row.ZISADMIN == 1) {
            groupRole = GroupRole.ADMIN;
        } else {
            throw new Error(`ZISADMIN has unknown value ${row.ZISADMIN}`);
        }

        let senderKeySent: boolean;
        if(row.ZSENDERKEYSENT === 0 || row.ZSENDERKEYSENT === null) {
            senderKeySent = false;
        } else if (row.ZSENDERKEYSENT === 1) {
            senderKeySent = true;
        } else {
            throw new Error(`ZSENDERKEYSENT has unknown value ${row.ZSENDERKEYSENT}`);
        }

        if(typeof row.ZCONTACTNAME !== 'string')
            throw new Error(`ZCONTACTNAME needs to exist and be a number but was ${row.ZCONTACTNAME}`);

        let fullName: string = row.ZCONTACTNAME;

        if(typeof row.ZMEMBERJID !== 'string')
            throw new Error(`ZMEMBERJID needs to exist and be a number but was ${row.ZMEMBERJID}`);

        let whatsAppJID: string = row.ZMEMBERJID;

        let person = await provider.people.getPersonByID(whatsAppJID)

        return new WhatsAppGroupMember(person, groupRole, undefined, senderKeySent);
    }
}

export class WhatsAppMessage implements Message {
    readonly id: string;
    readonly providerID: number;
    readonly chatID: string;
    readonly sent?: Date;
    readonly messageDate: Date;
    readonly textContent: string;
    readonly includedMedia?: MediaItem;
    readonly referencedMessage?: ReferencedMessage;
    readonly from?: WhatsAppPerson;
    readonly to?: WhatsAppPerson;
    readonly type: WhatsAppMessageType;
    readonly isFromMe: boolean;
    readonly groupEventType?: WhatsAppGroupEventType;
    readonly groupMemberA?: GroupMember;
    readonly groupMemberB?: GroupMember;
    readonly isStarred: boolean;

    readonly receiptInfo: MessageReceiptInfo[];
    readonly reactions: MessageReaction[];
    readonly pollInfo?: WhatsAppMessagePollInfo;

    readonly loadErrors?: any[];

    constructor(props: {
        id: string,
        providerID: number,
        chatID: string,
        sent?: Date,
        messageDate: Date,
        textContent: string,
        includedMedia?: MediaItem,
        referencedMessage?: ReferencedMessage,
        from?: WhatsAppPerson,
        to?: WhatsAppPerson,
        type: WhatsAppMessageType,
        isFromMe: boolean,
        groupEventType: WhatsAppGroupEventType,
        groupMemberA?: GroupMember,
        groupMemberB?: GroupMember,
        isStarred: boolean,
        receiptInfo: MessageReceiptInfo[],
        reactions: MessageReaction[],
        pollInfo?: WhatsAppMessagePollInfo,
        loadErrors?: any[]
    }) {
        this.id = props.id;
        this.providerID = props.providerID;
        this.chatID = props.chatID;
        this.messageDate = props.messageDate;
        this.textContent = props.textContent;
        this.includedMedia = props.includedMedia;
        this.referencedMessage = props.referencedMessage;
        this.from = props.from;
        this.to = props.to;
        this.type = props.type;
        this.isFromMe = props.isFromMe;
        this.groupEventType = props.groupEventType;
        this.groupMemberA = props.groupMemberA;
        this.groupMemberB = props.groupMemberB;
        this.isStarred = props.isStarred;
        this.receiptInfo = props.receiptInfo;
        this.reactions = props.reactions;
        this.pollInfo = props.pollInfo;
        this.loadErrors = props.loadErrors;
    }

    static async createWhatsAppMessageFromRow(row: any, provider: WhatsAppDataProvider): Promise<WhatsAppMessage> {
        if (typeof row.Z_PK !== "number")
            throw Error(`Z_PK needs to exists and be a number, but was ${row.Z_PK}`);
        if (typeof row.ZSTANZAID !== "string")
            throw Error(`ZSTANZAID needs to exists and be a string, but was ${row.ZSTANZAID}`);
        if (typeof row.ZGROUPEVENTTYPE !== "number")
            throw Error(`ZGROUPEVENTTYPE needs to exists and be a number, but was ${row.ZGROUPEVENTTYPE}`);
        if (typeof row.ZISFROMME !== "number")
            throw Error(`ZISFROMME needs to exists and be a number, but was ${row.ZISFROMME}`);
        if (typeof row.ZMESSAGETYPE !== "number")
            throw Error(`ZMESSAGETYPE needs to exists and be a number, but was ${row.ZMESSAGETYPE}`);
        if (typeof row.ZCHATSESSION !== "number")
            throw Error(`ZCHATSESSION needs to exists and be a number, but was ${row.ZCHATSESSION}`);
        if (typeof row.ZMESSAGEDATE !== "number")
            throw Error(`ZMESSAGEDATE needs to exists and be a number, but was ${row.ZMESSAGEDATE}`);
        if (row.ZGROUPMEMBER && typeof row.ZMESSAGEDATE !== "number")
            throw Error(`ZGROUPMEMBER needs to be a number or null, but was ${row.ZGROUPMEMBER}`);
        
        // Small gotcha: id is the STANZAID not Z_PK, but many functions looking up info for messages expect Z_PK.
        // TODO: NEEDS DOCUMENTATION
        let id = row.ZSTANZAID;

        let groupMemberPromise: Promise<WhatsAppGroupMember> | undefined;
        if(row.ZGROUPMEMBER)
            groupMemberPromise = provider.chats.getGroupMemberForID(row.ZGROUPMEMBER);
        
        let loadErrors: any[] | undefined = [];
        
        const messageInfoPromise = provider.messages.getReceiptInfoForMessage(row.Z_PK)
            .catch((reason) => {loadErrors?.push(reason); return []});
        const reactionsPromise = provider.messages.getReactionsForMessage(row.Z_PK)
            .catch((reason) => {loadErrors?.push(reason); return []});

        let groupEventType = DB.CHAT_DB.MESSAGE_TABLE.getGroupEventTypeFromDBValue(row.ZGROUPEVENTTYPE);
    
        let isFromMe: boolean;
        switch (row.ZISFROMME) {
            case 1:
                isFromMe = true;
                break;
            case 0:
                isFromMe = false;
                break;
            default:
                throw Error(`ZISFROMME has unknown value ${row.ZISFROMME}`);
        }

        let messageType = DB.CHAT_DB.MESSAGE_TABLE.getMessageTypeFromDBValue(row.ZMESSAGETYPE);

        let isStarred: boolean;
        if (typeof row.ZISSTARRED == "number" && row.ZISSTARRED == 1) {
            isStarred = true;
        } else {
            isStarred = false;
        }

        let chatID = row.ZCHATSESSION;
        let messageDate = DB.getDateFromDBDateTime(row.ZMESSAGEDATE);
        let text = row.ZTEXT;

        // let fromID = row.ZFROMJID;
        // let from: WhatsAppPerson | undefined;
        // from = await provider.people.getPersonByID(fromID);

        

        // Get additional info
        // e.g. media info, but ZWAMEDIAITEM also holds info on referenced messages
        const mediaItemID = row.ZMEDIAITEM;
        let additionalInfoPromise: Promise<WhatsAppMessageMediaOrAdditionalInfo> | undefined;
        if(mediaItemID) {
            additionalInfoPromise = provider.media.getMessageMediaOrAdditionalInfoByMediaItemID(mediaItemID, messageType)
                .catch((reason) => { loadErrors?.push(reason); return {}; });
        }

        let pollInfoPromise: Promise<WhatsAppMessagePollInfo | undefined> | undefined;
        if(messageType === MessageType.POLL)
            pollInfoPromise = provider.messages.getPollInfoForMessage(row.Z_PK);

        const setteledPromises = await Promise.all([
            groupMemberPromise,
            messageInfoPromise,
            reactionsPromise,
            additionalInfoPromise,
            pollInfoPromise
        ]);

        const [ 
            groupMemberA,
            messageInfo,
            reactions,
            additionalInfo,
            pollInfo ] = setteledPromises;

        const mediaItem = additionalInfo ? additionalInfo.mediaItem : undefined;
        const referencedMessage = additionalInfo ? additionalInfo.referencedMessage : undefined;

        let from = groupMemberA?.person;

        if(loadErrors.length === 0) loadErrors = undefined;
            
        return new WhatsAppMessage({
            id: id,
            providerID: provider.id,
            chatID: chatID,
            messageDate: messageDate,
            textContent: text,
            includedMedia: mediaItem,
            referencedMessage: referencedMessage,
            from: from,
            to: undefined,
            type: messageType,
            isFromMe: isFromMe,
            groupEventType: groupEventType,
            groupMemberA: groupMemberA,
            groupMemberB: undefined,
            isStarred: isStarred,
            receiptInfo: messageInfo,
            reactions: reactions,
            pollInfo: pollInfo,
            loadErrors: loadErrors
        });
    }
}

export type WhatsAppMessageType = MessageType | DB.WhatsAppMessageTypeExtension;

export type WhatsAppGroupEventType = GroupEventMessageType | DB.WhatsAppGroupEventTypeExtension;

export class WhatsAppMessageInfo {
    receiptInfo: MessageReceiptInfo[];
    reactions: MessageReaction[];
    pollInfo?: WhatsAppMessagePollInfo;
    sentDate?: Date;

    constructor(
        receiptInfo: MessageReceiptInfo[],
        reactions: MessageReaction[],
        pollInfo?: WhatsAppMessagePollInfo,
        sentDate?: Date
    ) {
        this.receiptInfo = receiptInfo;
        this.reactions = reactions;
        this.pollInfo = pollInfo;
        this.sentDate = sentDate;
    }

    static async createMessageInfoFromRow(row: any, dataProvider: WhatsAppDataProvider): Promise<WhatsAppMessageInfo> {
        if(!row || !row.ZRECEIPTINFO) return new WhatsAppMessageInfo([],[]);

        let rawProtobuf = row.ZRECEIPTINFO;

        const MessageInfo = dataProvider.protobufRoots.receiptInfo.lookupType(DB.CHAT_DB.MESSAGE_INFO_TABLE.MESSAGE_INFO_PROTO_TYPE);

        const decoded = MessageInfo.decode(rawProtobuf) as receiptinfo.IMessageInfo;

        let receiptInfoPromisses: Promise<MessageReceiptInfo>[] = [];
            
        let baseTime: Date | undefined;
            
        if(
            decoded.single !== undefined &&
            decoded.single !== null &&
            decoded.single.length > 0
        ) {
            if(!decoded.sentTimestampSeconds) throw Error("MessageInfo didn't contain a sentTimestamp");

            const baseTimestamp = decoded.sentTimestampSeconds;

            baseTime = DB.CHAT_DB.MESSAGE_INFO_TABLE.getDateFromSecondsTimestamp(baseTimestamp);

            decoded.single?.forEach((receiptInfoProtobuf) => 
            receiptInfoPromisses.push(
                    WhatsAppMessageInfo.createMessageReceiptInfoFromProtobufSingle(receiptInfoProtobuf, baseTimestamp, dataProvider)
                )
            );
        }

        decoded.singleLegacy?.forEach((receiptInfoLegacyProtobuf) => 
            receiptInfoPromisses.push(
                WhatsAppMessageInfo.createMessageReceiptInfoFromProtobufSingleLegacy(receiptInfoLegacyProtobuf, dataProvider)
            )
        );

        let receiptInfos: MessageReceiptInfo[];

        return Promise.all(receiptInfoPromisses)
            .then((infos) => {
                receiptInfos = infos;
                let reactionPromisses: Promise<MessageReaction>[] = [];
                decoded.reactions?.reaction?.forEach((reaction) => {
                    reactionPromisses.push(WhatsAppMessageInfo.createMessageReactionFromProtobufReaction(reaction, dataProvider));
                });
                return Promise.all(reactionPromisses);
            })
            .then((reactions) => {
                let pollInfo: WhatsAppMessagePollInfo | undefined;
                if(decoded.pollInfo) pollInfo = WhatsAppMessageInfo.createPollInfoFromProtobufPoll(decoded.pollInfo);

                return(new WhatsAppMessageInfo(
                    receiptInfos,
                    reactions,
                    pollInfo,
                    baseTime
                ));
            });
    }

    static async createMessageReceiptInfoFromProtobufSingle(single: receiptinfo.MessageInfo.IReceiptInfoSingle, baseTimestamp: number, provider: ChatDataProvider): Promise<MessageReceiptInfo> {
        let readDate: Date | undefined;
        if(single.offsetReadTimestampSeconds)
            readDate = DB.CHAT_DB.MESSAGE_INFO_TABLE.getDateFromSecondsTimestamp(baseTimestamp + single.offsetReadTimestampSeconds);

        let receivedDate: Date | undefined;
        if(single.offsetReceivedTimestampSeconds)
            receivedDate = DB.CHAT_DB.MESSAGE_INFO_TABLE.getDateFromSecondsTimestamp(baseTimestamp + single.offsetReceivedTimestampSeconds);

        let playedDate: Date | undefined;
        if(single.offsetPlayedTimestampSeconds)
            playedDate = DB.CHAT_DB.MESSAGE_INFO_TABLE.getDateFromSecondsTimestamp(baseTimestamp + single.offsetPlayedTimestampSeconds);
        
        if(!single.phoneNumber) throw Error("Receipt info did not include a phone number");
        let hexRepresentation: string = Buffer.from(single.phoneNumber).toString('hex');
        let whatsAppJID = hexRepresentation.substring(2, hexRepresentation.length-1) + DB.WHATS_APP_JID_PERSON_SUFFIX;
        let person = await provider.people.getPersonByID(whatsAppJID);
        
        return {
            person: person,
            received: receivedDate,
            viewed: readDate,
            played: playedDate
        };
    }

    static async createMessageReceiptInfoFromProtobufSingleLegacy(singleLegacy: receiptinfo.MessageInfo.IReceiptInfoSingleLegacy, provider: WhatsAppDataProvider): Promise<MessageReceiptInfo> {
        let readDate: Date | undefined;
        if(singleLegacy.readTimestampSeconds)
            readDate = DB.CHAT_DB.MESSAGE_INFO_TABLE.getDateFromSecondsTimestamp(singleLegacy.readTimestampSeconds);

        let receivedDate: Date | undefined;
        if(singleLegacy.receivedTimestampSeconds)
            receivedDate = DB.CHAT_DB.MESSAGE_INFO_TABLE.getDateFromSecondsTimestamp(singleLegacy.receivedTimestampSeconds);

        let playedDate: Date | undefined;
        if(singleLegacy.playedTimestampSeconds)
            playedDate = DB.CHAT_DB.MESSAGE_INFO_TABLE.getDateFromSecondsTimestamp(singleLegacy.playedTimestampSeconds);

        if(!singleLegacy.phoneNumber) throw Error("Receipt info did not include a phone number");
        let whatsAppJID = singleLegacy.phoneNumber + DB.WHATS_APP_JID_PERSON_SUFFIX;
        let person = await provider.people.getPersonByID(whatsAppJID);

        return {
            person: person,
            received: receivedDate,
            viewed: readDate,
            played: playedDate
        };
    }

    static async createMessageReactionFromProtobufReaction(reaction: receiptinfo.MessageInfo.Reactions.IReaction, provider: WhatsAppDataProvider): Promise<MessageReaction> {
        let personID = reaction.whatsAppJID;
        let person: Person | undefined;
        if(personID)
            person = await provider.people.getPersonByID(personID);

        let reactionEmoji = reaction.emoji;
        if(!reactionEmoji) throw Error('Reaction contained no emoji');

        let reactionTimestamp: any = reaction.reactionTimestampMilliseconds;
        if(!reactionTimestamp) throw Error('Reaction had no timestamp');
        let reactionTimestampNumber: number;
        if(reactionTimestamp instanceof Long) {
            reactionTimestampNumber = reactionTimestamp.toNumber();
        } else {
            reactionTimestampNumber = reactionTimestamp as number;
        }

        let date = new Date(reactionTimestampNumber);

        return {
            person: person,
            reaction: reactionEmoji,
            date: date
        };
    }

    static createPollInfoFromProtobufPoll(poll: receiptinfo.MessageInfo.IPoll): WhatsAppMessagePollInfo {
        const pollTitle = poll.title;
        if(!pollTitle) throw Error(`Poll title must be set but was ${pollTitle}`);

        let options: { title: string }[] = [];
        poll.option?.forEach((option) => {
            const optionTitle = option.title;
            if(!optionTitle) throw Error(`PollOption.title must be set but was ${optionTitle}`);
            options.push({title: optionTitle});
        })

        let responses: WhatsAppMessagePollResponse[] = [];
        poll.theirResponse?.forEach((response) => {
            responses.push(WhatsAppMessagePollResponse.createPollResponseFromProtobuf(response, false));
        });

        if(poll.ownResponse)
            responses.push(WhatsAppMessagePollResponse.createPollResponseFromProtobuf(poll.ownResponse, true));
        
        return new WhatsAppMessagePollInfo(
            pollTitle,
            options,
            responses
        );
    }
}

export class WhatsAppMessagePollInfo {
    readonly title: string;
    readonly options: { title: string }[];
    readonly responses: WhatsAppMessagePollResponse[];

    constructor(
        title: string,
        options: { title: string }[],
        responses: WhatsAppMessagePollResponse[]
    ) {
        this.title = title;
        this.options = options;
        this.responses = responses;
    }
}

export class WhatsAppMessagePollResponse {
    readonly votedOptionIndices: number[];
    readonly responseDate: Date;
    readonly responderWhatsAppJID?: string;
    readonly isOwnResponse: boolean;

    constructor(
        votedOptionIndices: number[],
        responseDate: Date,
        isOwnResponse: boolean,
        responderWhatsAppJID?: string
    ) {
        this.votedOptionIndices = votedOptionIndices;
        this.responseDate = responseDate;
        this.isOwnResponse = isOwnResponse;
        this.responderWhatsAppJID = responderWhatsAppJID;
    }

    static createPollResponseFromProtobuf(proto: receiptinfo.MessageInfo.Poll.IPollResponse, isOwnResponse: boolean) {
        const votedOptionIndices = proto.votedOption;
        if(!votedOptionIndices) throw Error(`PollResponse.voted_option must be set but was ${votedOptionIndices}`);

        const responseTimestamp: any = proto.timestampMilliseconds;
        if(!responseTimestamp) throw Error(`PollResponce.timestamp_milliseconds must be set but was ${responseTimestamp}`);
        
        let responseTimestampNumber: number;
        if(responseTimestamp instanceof Long) {
            responseTimestampNumber = responseTimestamp.toNumber();
        } else {
            responseTimestampNumber = responseTimestamp as number;
        }

        const responseDate = new Date(responseTimestampNumber);

        let responderJID = proto.whatsAppJid;
        if(!isOwnResponse && !responderJID) throw Error(`PollResponce.whats_app_jid must be set for not own responses but was ${responderJID}`);
        if(responderJID === null) responderJID = undefined;

        return new WhatsAppMessagePollResponse(
            votedOptionIndices,
            responseDate,
            isOwnResponse,
            responderJID
        );
    } 
}

export class WhatsAppReferencedMessage implements ReferencedMessage {
    readonly id: string;
    readonly providerID: number;
    readonly from?: string;
    readonly fromChat?: string;
    readonly content?: string;
    readonly mediaPreviewPath?: string;

    constructor(
        id: string,
        providerID: number,
        from?: string,
        fromChat?: string,
        content?: string,
        mediaPreviewPath?: string
    ) {
        this.id = id;
        this.providerID = providerID;
        this.from = from;
        this.fromChat = fromChat;
        this.content = content;
        this.mediaPreviewPath = mediaPreviewPath;
    }

    static createReferencedMessageFromProtobuf(proto: mediaitem.IMetadata, provider: WhatsAppDataProvider): WhatsAppReferencedMessage {
        if(!proto.referencedMessageStanzaId)
            throw Error('No Stanza ID found for referenced message');
        if(!proto.referencedMessage)
            throw Error('No referencedMessage found');
        
        let id = proto.referencedMessageStanzaId;
        let fromJID: string | undefined;
        if(typeof proto.referencedMessageSenderJid !== null) {
            fromJID = proto.referencedMessageSenderJid as string | undefined;
        } else {
            fromJID = undefined;
        }

        let fromChatJID: string | undefined;
        if(typeof proto.referencedMessageSenderJid !== null) {
            fromChatJID = proto.referencedMessageChatJid as string | undefined;
        } else {
            fromChatJID = undefined;
        }

        let referencedMessage = proto.referencedMessage;
        let textContent: string | undefined ;
        if(typeof referencedMessage.text !== null) {
            textContent = referencedMessage.text as string | undefined;
        } else {
            textContent = undefined;
        }

        // TODO: Implement attached media

        return new WhatsAppReferencedMessage(
            id,
            provider.id,
            fromJID,
            fromChatJID,
            textContent,
            ''
        )
    }

}

export class WhatsAppMediaItem implements MediaItem {
    readonly path?: string;
    readonly thumbnailPath?: string;
    readonly fileSize?: number;
    readonly messageID: string;
    readonly title?: string;
    readonly mediaURL?: string;
    readonly externalMediaURL?: WhatsAppMediaURL
    readonly location?: {
        latitude: number,
        longitude: number
    }

    constructor(props: {
        messageID: string,
        path?: string,
        thumbnailPath?: string,
        fileSize?: number,
        title?: string,
        mediaURL?: string,
        externalMediaURL?: WhatsAppMediaURL,
        location?: {
            latitude: number,
            longitude: number
        }
    }) {
        this.path = props.path;
        this.thumbnailPath = props.thumbnailPath;
        this.fileSize = props.fileSize;
        this.messageID = props.messageID;
        this.title = props.title;
        this.mediaURL = props.mediaURL;
        this.externalMediaURL = props.externalMediaURL;
        this.location = props.location;
    }

    static createMediaItemFromRowAndProtobuf(row: any, metadataProtobuf: mediaitem.IMetadata, provider: WhatsAppDataProvider): MediaItem {
        let externalMediaURL: WhatsAppMediaURL | undefined;
        if(metadataProtobuf.urlOriginal) {
            const original = metadataProtobuf.urlOriginal;
            const resolved = metadataProtobuf.urlLocationResolved;
            const previewTextCache = metadataProtobuf.externalMediaPreviewTextCache;

            if(!resolved || !previewTextCache) throw Error(`Error in protobuf: urlOriginal was set, but urlLocationResolved or externalMediaPreviewTextCache was not for MediaItem ID ${row.Z_PK}`);

            externalMediaURL = {
                original: original,
                resolved: resolved,
                previewTextCache: previewTextCache
            }
        }
        
        let parsedRow = this.createMediaItemFromRow(row, provider);

        return new WhatsAppMediaItem({
            ...parsedRow,
            externalMediaURL: externalMediaURL
        });
        
    }

    static createMediaItemFromRow(row: any, provider: WhatsAppDataProvider):WhatsAppMediaItem
    {
        if(typeof row.ZFILESIZE !== 'number')
            throw Error(`ZFILESIZE needs to be a number but was ${row.ZFILESIZE}`);
        
        const fileSize: number = row.ZFILESIZE;

        if(typeof row.ZMESSAGE !== 'number')
            throw Error(`ZMESSAGE needs to be a number but was ${row.ZMESSAGE}`);

        const messageID: string = row.ZMESSAGE;

        let mediaPath: string | undefined;
        if(row.ZMEDIALOCALPATH)
            mediaPath = path.join(provider.pathRoot, DB.MESSAGE_MEDIA_URI_PREFIX, row.ZMEDIALOCALPATH);

        let mediaURL: string | undefined;
        if(row.ZMEDIAURL)
            mediaURL = row.ZMEDIAURL;

        let thumbnailPath: string | undefined;
        if(row.ZXMPPTHUMBPATH)
            thumbnailPath = path.join(provider.pathRoot, DB.MESSAGE_MEDIA_URI_PREFIX, row.ZXMPPTHUMBPATH);

        let title: string | undefined;
        if(row.ZTITLE)
            title = row.ZTITLE;

        let location: {
            latitude: number,
            longitude: number
        } | undefined;
        if(row.ZLATITUDE && row.ZLONGITUDE) {
            location = {
                latitude: row.ZLATITUDE,
                longitude: row.ZLONGITUDE
            }
        }

        return new WhatsAppMediaItem({
            messageID: messageID,
            path: mediaPath,
            thumbnailPath: thumbnailPath,
            fileSize: fileSize,
            title: title,
            mediaURL: mediaURL,
            location: location
        });
    }
}

export type WhatsAppMediaURL = {
    readonly original: string;
    readonly resolved: string;
    readonly previewTextCache: string;
}

export class WhatsAppPerson implements Person {
    readonly id: string;
    readonly providerID: number;
    readonly rowID: string;
    readonly appleIdentifier?: string;
    readonly fullName?: string;
    readonly displayName?: string;
    readonly phone?: string;
    readonly profilePicture?: MediaItem;
    readonly about?: {
        readonly text?: string,
        readonly date?: Date
    }

    constructor(
        whatsAppJID: string,
        providerID: number,
        rowID: string,
        fullName: string | undefined,
        displayName: string | undefined,
        phone: string | undefined,
        appleIdentifier?: string,
        profilePicture?: MediaItem,
        about?: {text?: string, date?: Date}
    ) {
        this.id = whatsAppJID;
        this.providerID = providerID;
        this.rowID = rowID;
        this.appleIdentifier = appleIdentifier;
        this.fullName = fullName;
        this.displayName = displayName;
        this.phone = phone;
        this.profilePicture = profilePicture;
        this.about = about;
    }

    static createWhatsAppPersonFromRow(row: any, providerID: number): WhatsAppPerson {
        if (typeof row.Z_PK !== "number")
            throw Error(`Z_PK needs to exists and be a number, but was ${row.Z_PK}`);
        
        let id = row.Z_PK;

        if (typeof row.ZWHATSAPPID !== 'string')
            throw Error(`ZWHATSAPPID needs to exists and be a string, but was ${row.ZWHATSAPPID}`);

        let whatsAppJID = row.ZWHATSAPPID;

        let appleIdentifier: string | undefined = row.ZIDENTIFIER;

        let fullName: string | undefined = row.ZFULLNAME;

        let displayName: string | undefined = row.ZGIVENNAME;

        let phone: string | undefined = row.ZPHONENUMBER;

        let aboutText: string | undefined;

        if (typeof row.ZABOUTTEXT === 'string')
            aboutText = row.ZABOUTTEXT;
        
        let aboutDate: Date | undefined;

        if (typeof row.ZABOUTTIMESTAMP === 'number')
            aboutDate = DB.getDateFromDBDateTime(row.ZABOUTTIMESTAMP);

        let about = {text: aboutText, date: aboutDate};

        return new WhatsAppPerson(
            whatsAppJID,
            providerID,
            id,
            fullName,
            displayName,
            phone,
            appleIdentifier,
            undefined,
            about
        );
    }
}