import { Database } from "sqlite3";
import * as protobuf from "protobufjs";
import { NumericLiteral } from "typescript";
// import { getData } from "rawproto";

export class WhatsAppDatabaseParser {
  db;

  constructor(database: Database) {
    this.db = database;
  }

  /**
   *
   * @param columns Rows to return, default all
   */
  get_chat_sessions(
    callback: (err: Error | null, rows: any[]) => void,
    columns: string[] = [],
    orderby: string = "",
    limit: number,
    page = 0
  ) {
    let sql = "select ";

    if (columns.length == 0) sql += "* ";

    for (let i = 0; i < columns.length; i++) {
      sql += columns[i];
      if (i < columns.length - 1) {
        sql += ", ";
      } else {
        sql += " ";
      }
    }
    sql += "from ZWACHATSESSION";

    if (orderby !== "") {
      sql += " order by " + orderby;
      if (limit) {
        sql += " limit " + limit + " offset " + page * limit;
      }
    }

    this.db.all(sql, [], callback);
  }

  get_chat_session_by_id(
    callback: (err: Error | null, row: any) => void,
    id: number,
    columns: string[] = []
  ) {
    let sql = "select ";

    if (columns.length == 0) sql += "* ";

    for (let i = 0; i < columns.length; i++) {
      sql += columns[i];
      if (i < columns.length) {
        sql += ", ";
      } else {
        sql += " ";
      }
    }
    sql += `from ZWACHATSESSION where Z_PK=${id}`;

    this.db.all(sql, [], (err: Error | null, rows: any[]) =>
      callback(err, rows[0])
    );
  }

  /**
   * Messages are returned newest first.
   *
   * @param callback
   * @param chat_session The ZCONTACTJID of the chat session
   * @param limit Limit the number of messages
   * @param columns The columns to return
   */
  get_messages(
    callback: (err: Error | null, rows: any[]) => void,
    chat_session: string,
    columns: string[] = [],
    page: number = 0,
    limit: number = 20
  ) {
    let sql = "select ";

    if (columns.length == 0) sql += "* ";

    for (let i = 0; i < columns.length; i++) {
      sql += columns[i];
      if (i < columns.length - 1) {
        sql += ", ";
      } else {
        sql += " ";
      }
    }
    sql += `from ZWAMESSAGE where ZCHATSESSION="${chat_session}" order by ZMESSAGEDATE desc limit ${limit} offset ${
      page * limit
    }`;

    this.db.all(sql, [], callback);
  }

  get_message_by_id(
    callback: (err: Error | null, row: any) => void,
    id: number,
    columns: string[] = []
  ) {
    let sql = "select ";

    if (columns.length == 0) sql += "* ";

    for (let i = 0; i < columns.length; i++) {
      sql += columns[i];
      if (i < columns.length) {
        sql += ", ";
      } else {
        sql += " ";
      }
    }
    sql += `from ZWAMESSAGE where Z_PK=${id}`;

    this.db.all(sql, [], (err: Error | null, rows: any[]) =>
      callback(err, rows[0])
    );
  }

  /**
   * Passes raw (unprocessed) Protobuf of Message info to callback.
   *
   * @param callback
   * @param message The Z_PK of the message
   */
  get_message_info_by_message_id(
    callback: (err: Error | null, rows: any[]) => void,
    message: number,
    columns: string[] = []
  ) {
    let sql = "select ";

    if (columns.length == 0) sql += "* ";

    for (let i = 0; i < columns.length; i++) {
      sql += columns[i];
      if (i < columns.length) {
        sql += ", ";
      } else {
        sql += " ";
      }
    }

    sql += `from ZWAMESSAGEINFO where ZMESSAGE=${message}`;

    this.db.all(sql, [], (err: Error | null, rows: any[]) =>
      callback(err, rows[0])
    );
  }
}

export enum SessionType {
  PERSONAL_CHAT,
  GROUP_CHAT,
  BROADCAST_LIST,
  STATUS_UPDATE,
}

export const mac_unix_datetime_offset = 978307200;

export class ChatSession {
  primary_key: number; // Z_PK
  is_archived: boolean; // ZARCHIVED
  is_hidden: boolean; // ZHIDDEN
  message_counter: number; // ZMESSAGECOUNTER
  session_type: SessionType; // ZSESSIONTYPE
  unread_count: number; // ZUNREADCOUNT
  group_info?: GroupInfo;
  private group_info_key: number; // ZGROUPINFO
  last_message?: Message;
  private last_message_key: number; // ZLASTMESSAGE
  last_message_date: Date; // ZLASTMESSAGEDATE
  location_sharing_date?: Date; // ZLOCATIONSHARINGDATE
  contact_jid: string; // ZCONTACTJID
  last_message_text: string; // ZLASTMESSAGETEXT
  chat_name: string; // ZPARTNERNAME
  raw_data: any;

  private constructor(row: any) {
    this.raw_data = row;

    if (typeof row.Z_PK !== "number")
      throw Error(`Z_PK needs to exists and be a number, but was ${row.Z_PK}`);
    this.primary_key = row.Z_PK;

    if (typeof row.ZARCHIVED !== "number")
      throw Error(
        `ZARCHIVED needs to exists and be a number, but was ${row.ZARCHIVED}`
      );
    if (row.ZARCHIVED == 0) {
      this.is_archived = false;
    } else if (row.ZARCHIVED == 1) {
      this.is_archived = true;
    } else {
      throw Error(`ZARCHIVED has unknown value ${row.Z_PK}`);
    }

    if (typeof row.ZHIDDEN !== "number")
      throw Error(
        `ZHIDDEN needs to exists and be a number, but was ${row.ZHIDDEN}`
      );
    if (row.ZHIDDEN == 0) {
      this.is_hidden = false;
    } else if (row.ZHIDDEN == 1) {
      this.is_hidden = true;
    } else {
      throw Error(`ZHIDDEN has unknown value ${row.ZHIDDEN}`);
    }

    if (typeof row.ZMESSAGECOUNTER !== "number")
      throw Error(
        `ZMESSAGECOUNTER needs to exists and be a number, but was ${row.ZMESSAGECOUNTER}`
      );
    this.message_counter = row.ZMESSAGECOUNTER;

    if (typeof row.ZSESSIONTYPE !== "number")
      throw Error(
        `ZSESSIONTYPE needs to exists and be a number, but was ${row.ZSESSIONTYPE}`
      );
    switch (row.ZSESSIONTYPE) {
      case 0:
        this.session_type = SessionType.PERSONAL_CHAT;
        break;
      case 1:
        this.session_type = SessionType.GROUP_CHAT;
        break;
      case 2:
        this.session_type = SessionType.BROADCAST_LIST;
        break;
      case 3:
        this.session_type = SessionType.STATUS_UPDATE;
        break;
      default:
        throw Error(`ZSESSIONTYPE has unknown value ${row.ZSESSIONTYPE}`);
    }

    if (typeof row.ZUNREADCOUNT !== "number")
      throw Error(
        `ZUNREADCOUNT needs to exists and be a number, but was ${row.ZUNREADCOUNT}`
      );
    this.unread_count = row.ZUNREADCOUNT;

    if (typeof row.ZGROUPINFO !== "number")
      throw Error(
        `ZGROUPINFO needs to exists and be a number, but was ${row.ZGROUPINFO}`
      );
    this.group_info_key = row.ZGROUPINFO;

    if (typeof row.ZLASTMESSAGE !== "number")
      throw Error(
        `ZLASTMESSAGE needs to exists and be a number, but was ${row.ZLASTMESSAGE}`
      );
    this.last_message_key = row.ZLASTMESSAGE;

    if (typeof row.ZLASTMESSAGEDATE !== "number")
      throw Error(
        `ZLASTMESSAGEDATE needs to exists and be a number, but was ${row.ZLASTMESSAGEDATE}`
      );
    this.last_message_date = new Date(
      (row.ZLASTMESSAGEDATE + mac_unix_datetime_offset) * 1000
    );

    if (typeof row.ZCONTACTJID !== "string")
      throw Error(
        `ZCONTACTJID needs to exists and be a string, but was ${row.ZCONTACTJID}`
      );
    this.contact_jid = row.ZCONTACTJID;

    if (typeof row.ZLASTMESSAGETEXT !== "string")
      throw Error(
        `ZLASTMESSAGETEXT needs to exists and be a string, but was ${row.ZLASTMESSAGETEXT}`
      );
    this.last_message_text = row.ZLASTMESSAGETEXT;

    if (typeof row.ZPARTNERNAME !== "string")
      throw Error(
        `ZPARTNERNAME needs to exists and be a string, but was ${row.ZPARTNERNAME}`
      );
    this.chat_name = row.ZPARTNERNAME;
  }

  static async fetch_chat_session(
    db: WhatsAppDatabaseParser,
    key: number
  ): Promise<ChatSession> {
    return new Promise((resolve, reject) => {
      db.get_chat_session_by_id((err, row) => {
        if (err) {
          reject(err);
        }
        resolve(row);
      }, key);
    }).then((row) => {
      return new ChatSession(row);
    });
  }
}

export class GroupInfo {}

export class GroupMember {}

export enum GroupEventType {
  NOT_GROUP_EVENT_0,
  GROUP_NAME_CHANGE,
  NOT_GROUP_EVENT_2,
  GROUP_MEMBER_LEAVE,
  GROUP_ICON_CHANGE,
  GROUP_ICON_DELETED,
  PHONE_NUMBER_CHANGE_6,
  GROUP_MEMBER_REMOVED,
  BROADCAST_LIST_CREATED,
  PHONE_NUMBER_CHANGE_9,
  GROUP_ADMIN_ADD_YOU,
  GROUP_SETTINGS_ONLY_ADMINS_SEND_MESSAGES_11,
  GROUP_CREATED,
  GROUP_ENDED,
  GROUP_INVITE_LINK_JOIN,
  GROUP_INVITE_LINK_RESET,
  GROUP_DESCRIPTION_CHANGE,
  GROUP_SETTINGS_ONLY_ADMINS_EDIT_INFO,
  GROUP_SETTINGS_ALL_EDIT_INFO,
  GROUP_SETTINGS_ONLY_ADMINS_SEND_MESSAGES_20,
  GROUP_MISSED_VOICE_CALL,
  GROUP_DESCRIPTION_DELETED,
  GROUP_YOUR_INVITE_LINK_JOIN,
  BUSINESS_ACCOUNT_CHAT,
  BUSINESS_ACCOUNT_CHANGE_TO_STANDARD_ACCOUNT,
  CONTACT_BLOCKED,
  CONTACT_UNBLOCKED,
  SECURITY_CODE_CHANGE,
  GROUP_YOU_ADDED_PEOPLE,
}

export enum MessageType {
  TEXT,
  IMAGE,
  VIDEO,
  VOICE_MESSAGE,
  CONTACT,
  LOCATION,
  GROUP_STATUS_MESSAGE,
  LINK,
  DOCUMENT,
  E2ENOTICE,
  GIF,
  PENDING,
  DELETED,
  STICKER,
}

export class Message {
  primary_key: number; // Z_PK
  group_event_type: GroupEventType; // ZGROUPEVENTTYPE
  is_from_me: boolean; // ZISFROMME
  message_type: MessageType; // ZMESSAGETYPE
  is_starred: boolean; // ZISSTARRED
  chat_session_key: number; // ZCHATSESSION
  group_member_key?: number; // ZGROUPMEMBER
  media_item_key: number; // ZMEDIAITEM
  message_info_key: number; // ZMESSAGEINFO
  message_info?: MessageInfo;
  parent_message_key?: number; // ZPARENTMESSAGE
  message_date: Date; // ZMESSAGEDATE
  sent_date: Date; // ZSENTDATE
  from_jid?: string; // ZFROMJID
  text: string; // ZTEXT
  to_jid: string; // ZTOJID

  raw_data: any;

  private constructor(row: any) {
    this.raw_data = row;

    if (typeof row.Z_PK !== "number")
      throw Error(`Z_PK needs to exists and be a number, but was ${row.Z_PK}`);
    this.primary_key = row.Z_PK;

    if (typeof row.ZGROUPEVENTTYPE !== "number")
      throw Error(
        `ZGROUPEVENTTYPE needs to exists and be a number, but was ${row.ZGROUPEVENTTYPE}`
      );
    switch (row.ZGROUPEVENTTYPE) {
      case 0:
        this.group_event_type = GroupEventType.NOT_GROUP_EVENT_0;
        break;
      case 1:
        this.group_event_type = GroupEventType.GROUP_NAME_CHANGE;
        break;
      case 2:
        this.group_event_type = GroupEventType.NOT_GROUP_EVENT_2;
        break;
      case 3:
        this.group_event_type = GroupEventType.GROUP_MEMBER_LEAVE;
        break;
      case 4:
        this.group_event_type = GroupEventType.GROUP_ICON_CHANGE;
        break;
      case 5:
        this.group_event_type = GroupEventType.GROUP_ICON_DELETED;
        break;
      case 6:
        this.group_event_type = GroupEventType.PHONE_NUMBER_CHANGE_6;
        break;
      case 7:
        this.group_event_type = GroupEventType.GROUP_MEMBER_REMOVED;
        break;
      case 8:
        this.group_event_type = GroupEventType.BROADCAST_LIST_CREATED;
        break;
      case 9:
        this.group_event_type = GroupEventType.PHONE_NUMBER_CHANGE_9;
        break;
      case 10:
        this.group_event_type = GroupEventType.GROUP_ADMIN_ADD_YOU;
        break;
      case 11:
        this.group_event_type =
          GroupEventType.GROUP_SETTINGS_ONLY_ADMINS_SEND_MESSAGES_11;
        break;
      case 12:
        this.group_event_type = GroupEventType.GROUP_CREATED;
        break;
      case 14:
        this.group_event_type = GroupEventType.GROUP_ENDED;
        break;
      case 15:
        this.group_event_type = GroupEventType.GROUP_INVITE_LINK_JOIN;
        break;
      case 16:
        this.group_event_type = GroupEventType.GROUP_INVITE_LINK_RESET;
        break;
      case 17:
        this.group_event_type = GroupEventType.GROUP_DESCRIPTION_CHANGE;
        break;
      case 18:
        this.group_event_type =
          GroupEventType.GROUP_SETTINGS_ONLY_ADMINS_EDIT_INFO;
        break;
      case 19:
        this.group_event_type = GroupEventType.GROUP_SETTINGS_ALL_EDIT_INFO;
        break;
      case 20:
        this.group_event_type =
          GroupEventType.GROUP_SETTINGS_ONLY_ADMINS_SEND_MESSAGES_20;
        break;
      case 21:
        this.group_event_type = GroupEventType.GROUP_MISSED_VOICE_CALL;
        break;
      case 22:
        this.group_event_type = GroupEventType.GROUP_DESCRIPTION_DELETED;
        break;
      case 23:
        this.group_event_type = GroupEventType.GROUP_YOUR_INVITE_LINK_JOIN;
        break;
      case 26:
        this.group_event_type = GroupEventType.BUSINESS_ACCOUNT_CHAT;
        break;
      case 30:
        this.group_event_type =
          GroupEventType.BUSINESS_ACCOUNT_CHANGE_TO_STANDARD_ACCOUNT;
        break;
      case 34:
        this.group_event_type = GroupEventType.CONTACT_BLOCKED;
        break;
      case 35:
        this.group_event_type = GroupEventType.CONTACT_UNBLOCKED;
        break;
      case 36:
        this.group_event_type = GroupEventType.SECURITY_CODE_CHANGE;
        break;
      case 50:
        this.group_event_type = GroupEventType.GROUP_YOU_ADDED_PEOPLE;
        break;
      default:
        throw Error(`ZGOUPEVENTTYPE has unknown value ${row.ZGROUPEVENTTYPE}`);
    }

    if (typeof row.ZISFROMME !== "number")
      throw Error(
        `ZISFROMME needs to exists and be a number, but was ${row.ZISFROMME}`
      );
    switch (row.ZISFROMME) {
      case 1:
        this.is_from_me = true;
        break;
      case 0:
        this.is_from_me = false;
        break;
      default:
        throw Error(`ZISFROMME has unknown value ${row.ZISFROMME}`);
    }

    if (typeof row.ZMESSAGETYPE !== "number")
      throw Error(
        `ZMESSAGETYPE needs to exists and be a number, but was ${row.ZMESSAGETYPE}`
      );
    switch (row.ZMESSAGETYPE) {
      case 0:
        this.message_type = MessageType.TEXT;
        break;
      case 1:
        this.message_type = MessageType.IMAGE;
        break;
      case 2:
        this.message_type = MessageType.VIDEO;
        break;
      case 3:
        this.message_type = MessageType.VOICE_MESSAGE;
        break;
      case 4:
        this.message_type = MessageType.CONTACT;
        break;
      case 5:
        this.message_type = MessageType.LOCATION;
        break;
      case 6:
        this.message_type = MessageType.GROUP_STATUS_MESSAGE;
        break;
      case 7:
        this.message_type = MessageType.LINK;
        break;
      case 8:
        this.message_type = MessageType.DOCUMENT;
        break;
      case 10:
        this.message_type = MessageType.E2ENOTICE;
        break;
      case 11:
        this.message_type = MessageType.GIF;
        break;
      case 12:
        this.message_type = MessageType.PENDING;
        break;
      case 14:
        this.message_type = MessageType.DELETED;
        break;
      default:
        throw Error(`ZMESSAGETYPE has unknown value ${row.ZMESSAGETYPE}`);
    }

    if (typeof row.ZISSTARRED == "number" && row.ZISSTARRED == 1) {
      this.is_starred = true;
    } else {
      this.is_starred = false;
    }

    if (typeof row.ZCHATSESSION !== "number")
      throw Error(
        `ZCHATSESSION needs to exists and be a number, but was ${row.ZCHATSESSION}`
      );
    this.chat_session_key = row.ZCHATSESSION;

    if (typeof row.ZGROUPMEMBER == "number") {
    }
    this.group_member_key = row.ZGROUPMEMBER;

    if (typeof row.ZMEDIAITEM !== "number")
      throw Error(
        `ZMEDIAITEM needs to exists and be a number, but was ${row.ZMEDIAITEM}`
      );
    this.media_item_key = row.ZMEDIAITEM;

    if (typeof row.ZMESSAGEINFO !== "number")
      throw Error(
        `ZMESSAGEINFO needs to exists and be a number, but was ${row.ZMESSAGEINFO}`
      );
    this.message_info_key = row.ZMESSAGEINFO;

    if (typeof row.ZPARENTMESSAGE == "number")
      this.parent_message_key = row.ZPARENTMESSAGE;

    if (typeof row.ZMESSAGEDATE !== "number")
      throw Error(
        `ZMESSAGEDATE needs to exists and be a number, but was ${row.ZMESSAGEDATE}`
      );
    this.message_date = new Date(
      (row.ZMESSAGEDATE + mac_unix_datetime_offset) * 1000
    );

    if (typeof row.ZSENTDATE !== "number")
      throw Error(
        `ZSENTDATE needs to exists and be a number, but was ${row.ZSENTDATE}`
      );
    this.sent_date = new Date(
      (row.ZSENTDATE + mac_unix_datetime_offset) * 1000
    );

    if (typeof row.ZFROMJID == "string") this.from_jid = row.ZFROMJID;

    if (typeof row.ZTEXT !== "string")
      throw Error(
        `ZTEXT needs to exists and be a string, but was ${row.ZTEXT}`
      );
    this.text = row.ZTEXT;

    if (
      typeof row.ZTOJID !== "string" ||
      (row.ZTOJID === null && !this.is_from_me)
    )
      throw Error(
        `ZTOJID needs to exists and be a string, but was ${row.ZTOJID}`
      );
    this.to_jid = row.ZTOJID;
  }

  /**
   *
   * @param db
   * @param id Z_PK
   * @returns
   */
  static async fetch_message(
    db: WhatsAppDatabaseParser,
    id: number
  ): Promise<Message> {
    return new Promise((resolve, reject) => {
      db.get_message_by_id((err, row) => {
        if (err) {
          reject(err);
        }
        resolve(row);
      }, id);
    }).then((row) => {
      return new Message(row);
    });
  }
}

export class MessageInfo {
  message: number;
  raw_receipt_info: any;
  receipt_info_decoded_proto: any;
  receipt_info?: ReceiptInfo;

  raw_data: any;

  private constructor(
    row: any,
    message: number,
    raw_receipt_info: any,
    decoded_receipt_info: any
  ) {
    this.raw_data = row;
    this.message = message;
    this.raw_receipt_info = raw_receipt_info;
    this.receipt_info_decoded_proto = decoded_receipt_info;
  }

  static async parse_receipt_info(raw_receipt_info: any): Promise<any> {
    return new Promise((resolve, reject) => {
      protobuf.load("./receiptinfo.proto", (err, root) => {
        if (err) reject(err);

        // Obtain message type
        let ReceiptInfo = root?.lookupType("whatsappbackup.ReceiptInfo");

        let decoded = ReceiptInfo?.decode(raw_receipt_info);

        resolve(decoded);
      });
    });
  }

  static async fetch_message_info(
    db: WhatsAppDatabaseParser,
    for_message: number
  ): Promise<MessageInfo> {
    return new Promise((resolve, reject) => {
      db.get_message_info_by_message_id((err, row) => {
        if (err) {
          reject(err);
        }
        resolve(row);
      }, for_message);
    }).then(async (row: any) => {
      if (typeof row.ZMESSAGE !== "number")
        throw Error(
          `ZMESSAGE needs to exists and be a number, but was ${row.ZMESSAGE}`
        );
      let message = row.ZMESSAGE;

      if (typeof row.ZRECEIPTINFO == "undefined")
        throw Error("ZRECEIPTINFO needs to be defined");
      let raw_receipt_info = row.ZRECEIPTINFO;

      const decoded_receipt_info = await MessageInfo.parse_receipt_info(
        raw_receipt_info
      );
      return new MessageInfo(
        row,
        message,
        raw_receipt_info,
        decoded_receipt_info
      );
    });
  }
}

export class ReceiptInfo {
  single_infos: ReceiptInfoSingle[];
  sent_date: Date;

  constructor(singles: ReceiptInfoSingle[], sent: Date) {
    this.single_infos = singles;
    this.sent_date = sent;
  }
}

export class ReceiptInfoSingle {
  contact_phone: number;
  received_date: Date;
  read_date: Date;
  unknown_date: Date;

  constructor(contact: number, received: Date, read: Date, unknown: Date) {
    this.contact_phone = contact;
    this.received_date = received;
    this.read_date = read;
    this.unknown_date = unknown;
  }
}

export class MediaItem {}

export class MessageDataItem {}

export class ProfilePictureItem {}
