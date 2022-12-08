export interface Provider {
    readonly id: number
    readonly plattformName: string
}

export interface CanErrorLoading {
    readonly loadErrors?: any[];
}

export interface Chat {
    readonly id: string;
    readonly providerID: number;
    readonly name: string;
    readonly chatType: ChatType | string;

    readonly isArchived: boolean;
    readonly isHidden: boolean;
    readonly messageCount: number;
    readonly unreadCount: number;

    readonly lastMessagePreview: string;
    readonly lastMessageDate?: Date;
}

export interface ChatInfo {
    readonly id: string;
    readonly providerID: number;
    readonly chatID: string;

    readonly members?: GroupMember[];
    readonly dateCreated?: Date;
    readonly createdByID?: string;

    readonly picture?: MediaItem;
}

export enum ChatType {
    PERSONAL='personal',
    GROUP='group',
    BROADCAST_LIST='broadcast list',
    STATUS_UPDATE='status update'
}

export interface GroupMember {
    readonly person: Person;
    readonly role: GroupRole | string;
    readonly joinedDate?: Date
}

export enum GroupRole {
    MEMBER='member',
    ADMIN='admin'
}

export interface Message extends CanErrorLoading {
    readonly id: string;
    readonly providerID: number;
    readonly chatID: string;
    readonly sent?: Date;
    readonly messageDate: Date;
    readonly textContent: string;
    readonly includedMedia?: MediaItem;
    readonly referencedMessage?: ReferencedMessage;
    readonly from?: Person;
    readonly to?: Person; // undefinied if group message
    readonly type: MessageType | string;
    readonly isFromMe: boolean;

    readonly groupEventType?: GroupEventMessageType | string;
    readonly groupMemberA?: GroupMember;
    readonly groupMemberB?: GroupMember;

    readonly isStarred: boolean;

    readonly receiptInfo: MessageReceiptInfo[];
    readonly reactions: MessageReaction[];
}

export enum MessageType {
    TEXT='text',
    IMAGE='image',
    VIDEO='video',
    VOICE_MESSAGE='voice message',
    CONTACT='contact',
    LOCATION='location',
    SYSTEM_MESSAGE='group status message',
    LINK='link',
    DOCUMENT='document',
    E2ENOTICE='end to end notice',
    GIF='gif',
    PENDING='pending',
    DELETED='deleted',
    STICKER='sticker',
    POLL='poll',
    UNKNOWN='unknown type'
}

export enum GroupEventMessageType {
    NOT_GROUP_EVENT_0='not group event 0',
    GROUP_NAME_CHANGE='group name changed',
    NOT_GROUP_EVENT_2='not group event 2',
    GROUP_MEMBER_LEAVE='group member left',
    GROUP_ICON_CHANGE='group icon changed',
    GROUP_ICON_DELETED='group icon was deleted',
    PHONE_NUMBER_CHANGE_6='phone number changed 6',
    GROUP_MEMBER_REMOVED='group member was removed',
    BROADCAST_LIST_CREATED='broadcast list was created',
    PHONE_NUMBER_CHANGE_9='phone number changed 9',
    GROUP_ADMIN_ADD_YOU='you were added as a group admin',
    GROUP_SETTINGS_ONLY_ADMINS_SEND_MESSAGES_11='group settings were changed to only allow admins to send messages 11',
    GROUP_CREATED='group was created',
    GROUP_ENDED='group ended',
    GROUP_INVITE_LINK_JOIN='x joined using this group\'s invite link',
    GROUP_INVITE_LINK_RESET='the invite link was reset',
    GROUP_DESCRIPTION_CHANGE='group description changed',
    GROUP_SETTINGS_ONLY_ADMINS_EDIT_INFO='group settings were changed to only allow admins to edit group info',
    GROUP_SETTINGS_ALL_EDIT_INFO='group settings were changed to allow all participants to edit group info',
    GROUP_SETTINGS_ONLY_ADMINS_SEND_MESSAGES_20='group settings were changed to only allow admins to send messages 20',
    GROUP_MISSED_VOICE_CALL='you missed a group voice call',
    GROUP_DESCRIPTION_DELETED='group description deleted',
    GROUP_YOUR_INVITE_LINK_JOIN='x joined using your invite link',
    BUSINESS_ACCOUNT_CHAT='this chat is with a business account',
    BUSINESS_ACCOUNT_CHANGE_TO_STANDARD_ACCOUNT='this person changed their account from a business account to a standard account',
    CONTACT_BLOCKED='you blocked this contact',
    CONTACT_UNBLOCKED='you unblocked this contact',
    SECURITY_CODE_CHANGE='your security code with x changed',
    GROUP_YOU_ADDED_PEOPLE='you added x,y,... to the group',
    VIDEO_CALL_STARTED='video call started',
    VOICE_CALL_MISSED_DURING_DO_NOT_DISTURB='you missed a voice call while in do not disturb mode',
    VIDEO_CALL_MISSED_DURING_DO_NOT_DISTURB='you missed a video call while in do not disturb mode',
    UNKNOWN='unkown'
}

export interface ReferencedMessage {
    readonly id: string;
    readonly providerID: number;
    readonly from?: string;
    readonly content?: string;
    /**
     * The relative path to the preview of media in this referenced message, relative to `pathRoot`
     */
    readonly mediaPreviewPath?: string;
}

export interface MessageReceiptInfo {
    readonly person: Person;
    readonly received?: Date;
    readonly viewed?: Date;
    readonly played?: Date;
}

export interface MessageReaction {
    readonly person?: Person;
    readonly reaction: string;
    readonly date: Date;
}

export interface MediaItem {
    readonly path?: string;
    readonly thumbnailPath?: string;
    readonly fileSize?: number;
    readonly messageID: string;
    readonly title?: string;
    readonly mediaURL?: string;
}

export interface Person {
    readonly id: string;
    readonly providerID: number;
    readonly fullName?: string;
    readonly displayName?: string;
    readonly phone?: string;
    readonly ProfilePicture?: MediaItem;
    readonly about?: {
        readonly text?: string,
        readonly date?: Date
    }
}