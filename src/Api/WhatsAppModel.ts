import * as Model from './MessengerModel';
import * as Parser from './WhatsAppDatabaseParser';

export class Chat implements Model.Chat {
    readonly raw_data: any;
    readonly key: number;
    readonly is_archived: boolean;
    readonly is_hidden: boolean;
    readonly message_counter: number;
    readonly last_message_key: number;
    readonly jid: String;
    name: String;
    profile_picture?: String;
    last_message?: String;
    last_message_date: Date;
    unread_count: number;
    chat_info?: Model.ChatInfo;

    private constructor(row: any) {
        this.raw_data = row;

        if(typeof row.Z_PK !== 'number')
            throw Error(`Z_PK needs to exists and be a number, but was ${row.Z_PK}`);
        this.key = row.Z_PK;

        if(typeof row.ZARCHIVED !== 'number')
            throw Error(`ZARCHIVED needs to exists and be a number, but was ${row.ZARCHIVED}`);
        if(row.ZARCHIVED == 0) {
            this.is_archived = false;
        } else if(row.ZARCHIVED == 1) {
            this.is_archived = true;
        } else {
            throw Error(`ZARCHIVED has unknown value ${row.Z_PK}`);
        }

        if(typeof row.ZHIDDEN !== 'number')
            throw Error(`ZHIDDEN needs to exists and be a number, but was ${row.ZHIDDEN}`);
        if(row.ZHIDDEN == 0) {
            this.is_hidden = false;
        } else if(row.ZHIDDEN == 1) {
            this.is_hidden = true;
        } else {
            throw Error(`ZHIDDEN has unknown value ${row.ZHIDDEN}`);
        }

        if(typeof row.ZMESSAGECOUNTER !== 'number')
            throw Error(`ZMESSAGECOUNTER needs to exists and be a number, but was ${row.ZMESSAGECOUNTER}`);
        this.message_counter = row.ZMESSAGECOUNTER;

        // BEG ChatInfo
        let chat_type: Model.ChatType;
        
        if(typeof row.ZSESSIONTYPE !== 'number')
            throw Error(`ZSESSIONTYPE needs to exists and be a number, but was ${row.ZSESSIONTYPE}`);
        switch(row.ZSESSIONTYPE) {
            case 0:
                chat_type = Model.ChatType.PERSONAL_CHAT;
                break;
            case 1:
                chat_type = Model.ChatType.GROUP_CHAT;
                break;
            case 2:
                chat_type = Model.ChatType.BROADCAST_LIST;
                break;
            case 3:
                chat_type = Model.ChatType.STATUS_UPDATE;
                break;
            default:
                throw Error(`ZSESSIONTYPE has unknown value ${row.ZSESSIONTYPE}`);
        }

        if(typeof row.ZGROUPINFO !== 'number')
            throw Error(`ZGROUPINFO needs to exists and be a number, but was ${row.ZGROUPINFO}`);
        let group_info_key = row.ZGROUPINFO;

        this.chat_info = new ChatInfo(this.key, group_info_key, chat_type);

        // END ChatInfo

        if(typeof row.ZUNREADCOUNT !== 'number')
            throw Error(`ZUNREADCOUNT needs to exists and be a number, but was ${row.ZUNREADCOUNT}`);
        this.unread_count = row.ZUNREADCOUNT;

        if(typeof row.ZLASTMESSAGE !== 'number')
            throw Error(`ZLASTMESSAGE needs to exists and be a number, but was ${row.ZLASTMESSAGE}`);
        this.last_message_key = row.ZLASTMESSAGE;

        if(typeof row.ZLASTMESSAGEDATE !== 'number')
            throw Error(`ZLASTMESSAGEDATE needs to exists and be a number, but was ${row.ZLASTMESSAGEDATE}`);
        this.last_message_date = new Date((row.ZLASTMESSAGEDATE + Parser.mac_unix_datetime_offset)*1000);

        if(typeof row.ZCONTACTJID !== 'string')
            throw Error(`ZCONTACTJID needs to exists and be a string, but was ${row.ZCONTACTJID}`);
        this.jid = row.ZCONTACTJID;

        if(typeof row.ZLASTMESSAGETEXT !== 'string')
            throw Error(`ZLASTMESSAGETEXT needs to exists and be a string, but was ${row.ZLASTMESSAGETEXT}`);
        this.last_message = row.ZLASTMESSAGETEXT;

        if(typeof row.ZPARTNERNAME !== 'string')
            throw Error(`ZPARTNERNAME needs to exists and be a string, but was ${row.ZPARTNERNAME}`);
        this.name = row.ZPARTNERNAME;
    }

    static async fetch_chat_session(db: Parser.WhatsAppDatabaseParser, key: number): Promise<Chat> {
        return new Promise((resolve,reject) => {
            db.get_chat_session_by_id((err,row) => {
                if (err) {
                    reject(err);
                }
                resolve(row);
            }, key);
        }).then(
            (row) => {
                return new Chat(row);
            }
        );
    }
}

export class ChatInfo implements Model.ChatInfo {
    members: Model.Contact[];
    member_group_roles: GroupMember[];
    type: Model.ChatType;
    description?: String;
    readonly chat_key: number;
    readonly key: number;

    constructor(chat_key: number, group_info_key: number, type: Model.ChatType) {
        this.key = group_info_key;
        this.chat_key = chat_key;
        this.type = type;
        this.members = []; // TODO
        this.member_group_roles = []; // TODO
    }
}

export class GroupMember implements Model.GroupMember {
    contact: Model.Contact;
    role: Model.GroupRole;

    constructor(contact: Model.Contact, role: Model.GroupRole) {
        this.contact = contact;
        this.role = role;
    }
}

export class Contact implements Model.Contact {
    display_name: String;
    profile_picture?: String;
    status?: String;
    readonly jid: String;

    constructor(display_name: String, jid: String) {
        this.display_name = display_name;
        this.jid = jid;
    }
}