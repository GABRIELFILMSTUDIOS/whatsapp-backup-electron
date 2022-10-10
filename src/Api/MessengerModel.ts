export interface Chat {
    name: String;
    profile_picture?: String;
    last_message?: String;
    last_message_date: Date;
    unread_count: number;
    chat_info?: ChatInfo;

    //load_last_messages(limit: number, page: number): Message[]
}

export enum ChatType {
    PERSONAL_CHAT,
    GROUP_CHAT,
    BROADCAST_LIST,
    STATUS_UPDATE
}

export interface ChatInfo {
    members: Contact[];
    member_group_roles: GroupMember[];
    type: ChatType;
    description?: String;
}

export enum GroupRole {
    REGULAR,
    ADMIN
}

export interface GroupMember {
    contact: Contact;
    role: GroupRole;
}

enum MessageType {
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
    STICKER
}

export interface Message {
    message_type: MessageType;
    group_event?: GroupEvent;
    message_info?: MessageInfo;
    from: Contact;
    to: Contact;
    text: String;
}

export interface MessageInfo {
    is_starred: boolean;
    receipt_info: MessageReceipt[];
    reactions: MessageReaction[];
}

export interface MessageReceipt {
    contact: Contact;
    received?: Date;
    read?: Date;
    listened?: Date;
}

export interface MessageReaction {
    contact: Contact;
    timestamp: Date;
    reaction: String;
}

export enum GroupEventType {
    NOT_GROUP_EVENT,
    GROUP_NAME_CHANGE,
    GROUP_MEMBER_LEAVE,
    GROUP_ICON_CHANGE,
    GROUP_ICON_DELETED,
    PHONE_NUMBER_CHANGE,
    GROUP_MEMBER_REMOVED,
    BROADCAST_LIST_CREATED,
    GROUP_ADMIN_ADD_YOU,
    GROUP_SETTINGS_ONLY_ADMINS_SEND_MESSAGES,
    GROUP_CREATED,
    GROUP_ENDED,
    GROUP_INVITE_LINK_JOIN,
    GROUP_INVITE_LINK_RESET,
    GROUP_DESCRIPTION_CHANGE,
    GROUP_SETTINGS_ONLY_ADMINS_EDIT_INFO,
    GROUP_SETTINGS_ALL_EDIT_INFO,
    GROUP_MISSED_VOICE_CALL,
    GROUP_DESCRIPTION_DELETED,
    GROUP_YOUR_INVITE_LINK_JOIN,
    BUSINESS_ACCOUNT_CHAT,
    BUSINESS_ACCOUNT_CHANGE_TO_STANDARD_ACCOUNT,
    CONTACT_BLOCKED,
    CONTACT_UNBLOCKED,
    SECURITY_CODE_CHANGE,
    GROUP_YOU_ADDED_PEOPLE
}

export interface GroupEvent {
    event_type: GroupEventType;
    affected_contacts: Contact[];
}

export interface Contact {
    display_name: String;
    profile_picture?: String;
    status?: String;
}