import * as path from "path";
import { Database } from "sqlite3";

import { ChatType, GroupEventMessageType, MessageType } from '../api/Model';
import { WhatsAppChatType, WhatsAppGroupEventType, WhatsAppMessageType } from "./WhatsAppDataProvider";

/**
 * The offset of mac epoch start (01-01-2001) to the unix epoch start (01-01-1970) in seconds.
 * If `a` is a time in seconds since mac epoch start (e.g. as in DATETIME entries in the DB)
 * then `a + MAC_UNIX_DATETIME_OFFSET` is the corresponding time in seconds since the unix epoch start.
 * CAUTION: often, a time in the unix epoch is needed in milliseconds.
 * Remeber to multiply by 1000 accordingly.
 */
export const MAC_UNIX_DATETIME_OFFSET_SECONDS = 978307200;

/**
 * Get a Date object from a datetime value in the database.
 * 
 * @param macDatetime Mac DateTime in seconds.
 * @returns correspronding Date.
 */
export function getDateFromDBDateTime(macDatetime: number) {
    return new Date((macDatetime + MAC_UNIX_DATETIME_OFFSET_SECONDS)*1000);
}

export function detDBDateTimeFromDate(date: Date) {
    return date.valueOf() - MAC_UNIX_DATETIME_OFFSET_SECONDS*1000;
}

export const WHATS_APP_JID_PERSON_SUFFIX = '@s.whatsapp.net';
export const WHATS_APP_JID_GROUP_SUFFIX = '@g.us';
export const WHATS_APP_JID_BROADCAST_SUFFIX = '@broadcast';

export const MESSAGE_MEDIA_URI_PREFIX = 'Message';

// These live in this file to avoid weird errors because of circular imports
// @see https://github.com/microsoft/TypeScript/issues/3200
export enum WhatsAppChatTypeExtension {
    COMMUNITY = 'community'
}
export enum WhatsAppMessageTypeExtension {
    GROUP_INVITE = 'whatsapp group invite',
    VIEW_ONCE_MESSAGE_OPENED = 'opened view once message'
}
export enum WhatsAppGroupEventTypeExtension {
    GROUP_ADDED_TO_COMMUNITY_X = 'group added to a community',
    GROUP_X_ADDED_TO_COMMUNITY = 'a group was added to this community',
    COMMUNITY_DEACTIVATED = 'community deactivated',
    COMMUNITY_ADMIN_REMOVED = 'x is no longer community admin'
}

export namespace CHAT_DB {
    export const DB_FILE_NAME = "ChatStorage.sqlite"

    export namespace CHAT_TABLE {
        export const NAME = "ZWACHATSESSION";
        export const COLUMN_LAST_MESSAGE_DATE = "ZLASTMESSAGEDATE";
        export const COLUMN_CHAT_TYPE = "ZSESSIONTYPE";

        export function getDBSessionTypeForChatType(type: WhatsAppChatType) {
            switch(type) {
                case ChatType.PERSONAL: return 0;
                case ChatType.GROUP: return 1;
                case ChatType.BROADCAST_LIST: return 2;
                case ChatType.STATUS_UPDATE: return 3;
                case WhatsAppChatTypeExtension.COMMUNITY: return 4;
                default: throw Error(`Unknown ChatType ${type}`);
            }
        }

        export function getChatTypeFromDBSessionType(sessionType: number) {
            switch(sessionType) {
                case 0: return ChatType.PERSONAL;
                case 1: return ChatType.GROUP;
                case 2: return ChatType.BROADCAST_LIST;
                case 3: return ChatType.STATUS_UPDATE;
                case 4: return WhatsAppChatTypeExtension.COMMUNITY;
                default: throw Error(`Unknown session type db value ${sessionType}`);
            }
        }
    }

    export namespace GROUP_MEMBER_TABLE {
        export const NAME = 'ZWAGROUPMEMBER';

    }

    export namespace GROUP_INFO_TABLE {
        export const NAME = 'ZWAGROUPINFO'
    }

    export namespace MEDIA_ITEM_TABLE {
        export const NAME = "ZWAMEDIAITEM";

        export const PROTO_FILE_PATH = path.join(__dirname, "./protobuf/mediaitem.proto");
        export const METADATA_PROTO_TYPE = "mediaitem.Metadata";
    }

    export namespace MESSAGE_TABLE {
        export const NAME = "ZWAMESSAGE";
        export const COLUMN_MESSAGE_DATE = "ZMESSAGEDATE";
        export const COLUMN_CHAT_SESSION = "ZCHATSESSION";

        export const PROTO_FILE_PATH = path.join(__dirname, "./protobuf/message.proto");

        export const DB_VALUE_TO_GROUP_EVENT_TYPE_MAP: Record<number, WhatsAppGroupEventType> = {
            0: GroupEventMessageType.NOT_GROUP_EVENT_0,
            1: GroupEventMessageType.GROUP_NAME_CHANGE,
            2: GroupEventMessageType.NOT_GROUP_EVENT_2,
            3: GroupEventMessageType.GROUP_MEMBER_LEAVE,
            4: GroupEventMessageType.GROUP_ICON_CHANGE,
            5: GroupEventMessageType.GROUP_ICON_DELETED,
            6: GroupEventMessageType.PHONE_NUMBER_CHANGE_6,
            7: GroupEventMessageType.GROUP_MEMBER_REMOVED,
            8: GroupEventMessageType.BROADCAST_LIST_CREATED,
            9: GroupEventMessageType.PHONE_NUMBER_CHANGE_9,
            10: GroupEventMessageType.GROUP_ADMIN_ADD_YOU,
            11: GroupEventMessageType.GROUP_SETTINGS_ONLY_ADMINS_SEND_MESSAGES_11,
            12: GroupEventMessageType.GROUP_CREATED,
            13: GroupEventMessageType.UNKNOWN, // 13 and 14 appear when chat has ended. Unclear why difference. 
            14: GroupEventMessageType.UNKNOWN, //
            15: GroupEventMessageType.GROUP_INVITE_LINK_JOIN,
            16: GroupEventMessageType.GROUP_INVITE_LINK_RESET,
            17: GroupEventMessageType.GROUP_DESCRIPTION_CHANGE,
            18: GroupEventMessageType.GROUP_SETTINGS_ONLY_ADMINS_EDIT_INFO,
            19: GroupEventMessageType.GROUP_SETTINGS_ALL_EDIT_INFO,
            20: GroupEventMessageType.GROUP_SETTINGS_ONLY_ADMINS_SEND_MESSAGES_20,
            21: GroupEventMessageType.GROUP_MISSED_VOICE_CALL,
            22: GroupEventMessageType.GROUP_DESCRIPTION_DELETED,
            23: GroupEventMessageType.GROUP_YOUR_INVITE_LINK_JOIN,
            25: GroupEventMessageType.UNKNOWN, // Appears on exactly one message in my dataset, that WhatsApp on my Phone can't find (despite the message being in the database the phone is using)
            26: GroupEventMessageType.BUSINESS_ACCOUNT_CHAT,
            27: WhatsAppGroupEventTypeExtension.GROUP_ADDED_TO_COMMUNITY_X,
            30: GroupEventMessageType.BUSINESS_ACCOUNT_CHANGE_TO_STANDARD_ACCOUNT,
            31: WhatsAppGroupEventTypeExtension.GROUP_X_ADDED_TO_COMMUNITY,
            32: WhatsAppGroupEventTypeExtension.COMMUNITY_DEACTIVATED,
            34: GroupEventMessageType.CONTACT_BLOCKED,
            35: GroupEventMessageType.CONTACT_UNBLOCKED,
            36: GroupEventMessageType.SECURITY_CODE_CHANGE,
            38: GroupEventMessageType.UNKNOWN, //INSPECT
            39: WhatsAppGroupEventTypeExtension.COMMUNITY_ADMIN_REMOVED,
            40: GroupEventMessageType.UNKNOWN, // Observed 3 times in my dataset. Doesn't appear in the App on my phone. ZTEXT is some hex value, not protobuf apparently.
            41: GroupEventMessageType.VIDEO_CALL_STARTED,
            44: GroupEventMessageType.UNKNOWN,
            45: GroupEventMessageType.VOICE_CALL_MISSED_DURING_DO_NOT_DISTURB,
            46: GroupEventMessageType.VIDEO_CALL_MISSED_DURING_DO_NOT_DISTURB,
            50: GroupEventMessageType.GROUP_YOU_ADDED_PEOPLE,
            51: GroupEventMessageType.UNKNOWN, //INSPECT
            53: GroupEventMessageType.UNKNOWN, //INSPECT
        };

        export function getGroupEventTypeFromDBValue(value: number): WhatsAppGroupEventType {
            if(DB_VALUE_TO_GROUP_EVENT_TYPE_MAP[value])
                return DB_VALUE_TO_GROUP_EVENT_TYPE_MAP[value];

            return GroupEventMessageType.UNKNOWN;
        }

        export function getDBValueFromGroupEventType(eventType: GroupEventMessageType): string {
            for(let value in DB_VALUE_TO_GROUP_EVENT_TYPE_MAP) {
                if(DB_VALUE_TO_GROUP_EVENT_TYPE_MAP[value] === eventType) return value;
            }
            throw Error(`Unknown GroupEventType ${eventType}`);
        }

        export const DB_VALUE_TO_MESSAGE_TYPE_MAP: Record<number, WhatsAppMessageType> = {
            0: MessageType.TEXT,
            1: MessageType.IMAGE,
            2: MessageType.VIDEO,
            3: MessageType.VOICE_MESSAGE,
            4: MessageType.CONTACT,
            5: MessageType.LOCATION,
            6: MessageType.SYSTEM_MESSAGE,
            7: MessageType.LINK,
            8: MessageType.DOCUMENT,
            10: MessageType.E2ENOTICE,
            11: MessageType.GIF,
            12: MessageType.PENDING,
            14: MessageType.DELETED,
            15: MessageType.STICKER,
            27: WhatsAppMessageTypeExtension.GROUP_INVITE,
            38: WhatsAppMessageTypeExtension.VIEW_ONCE_MESSAGE_OPENED,
            46: MessageType.POLL
        };

        export function getMessageTypeFromDBValue(value: number): WhatsAppMessageType {
            if(DB_VALUE_TO_MESSAGE_TYPE_MAP[value])
                return DB_VALUE_TO_MESSAGE_TYPE_MAP[value];

            return MessageType.UNKNOWN;
        }

        export function getDBValueFromMessageType(messageType: MessageType): string {
            for(let value in DB_VALUE_TO_MESSAGE_TYPE_MAP) {
                if(DB_VALUE_TO_MESSAGE_TYPE_MAP[value] === messageType) return value;
            }
            throw Error(`Unknown MessageType ${messageType}`);
        }
    }

    export namespace MESSAGE_INFO_TABLE {
        export const NAME = "ZWAMESSAGEINFO";

        // TODO make path stable
        export const PROTO_FILE_PATH = path.join(__dirname, "./protobuf/receiptinfo.proto");
        export const MESSAGE_INFO_PROTO_TYPE = "receiptinfo.MessageInfo";

        export function getDateFromSecondsTimestamp(timestamp: number) {
            return new Date(timestamp * 1000);
        }
    }
}

export namespace CONTACTS_DB {
    export const DB_FILE_NAME = "ContactsV2.sqlite";

    export namespace ADDRESS_BOOK_TABLE {
        export const NAME = 'ZWAADDRESSBOOKCONTACT';

        export const COLUMN_SORT = 'ZSORT';
        export const COLUMN_FULL_NAME = 'ZFULLNAME';
        export const COLUMN_PHONE = 'ZPHONENUMBER';
    }
}

export namespace CALL_HISTORY_DB {
    export const DB_FILE_NAME = "CallHistory.sqlite";
}

export function concatWhereStatements(whereStatements: {
    column: string,
    value: any,
    relation: string
}[]): { statement: string, sqlParams: any } {
    let statement = '';
    let sqlParams: any = {};

    for(let i = 0; i<whereStatements.length; i++) {
        statement += `${whereStatements[i].column} ${whereStatements[i].relation} $value${i}`;
        sqlParams[`$value${i}`] = whereStatements[i].value;
        if(i<whereStatements.length-1) { 
            // If this is not the last object, add an `and`
            statement += ' and ';
        }
    }
    return { statement: statement, sqlParams: sqlParams };
}

/**
 * Get the sql for efficient pagination.
 * 
 * @param orderByColumn The column to order by
 * @param tableName The table name
 * @param orderDirection 'asc' for ascending, 'desc' for descending
 * @param whereStatements where statements to filter by. Should be a string containing the entire where-clause including the command 'where'.
 * @returns The sql to implement efficient pagination. Uses placeholders `$limit` and `$offset` for limit and offset respectively. Pass an object containg `$limit` and `$offset` to sqlite when executing the sql.
 * @see https://stackoverflow.com/questions/12266025/sqlite-query-optimization-using-limit-and-offset
 */
export function efficientPagination(orderByColumn: string, tableName: string, orderDirection: string, whereStatements: string) {
    return `${orderByColumn} in (select ${orderByColumn} from ${tableName} ${whereStatements} order by ${orderByColumn} ${orderDirection} limit $limit offset $offset )`;;
}

export function promiseForDB(forPath: string, mode: number): Promise<Database> {
    return new Promise<Database>((resolve, reject) => {
        let db = new Database(forPath, mode, (err) => {
            if(err) reject(err);
            resolve(db);
        });
    })
}