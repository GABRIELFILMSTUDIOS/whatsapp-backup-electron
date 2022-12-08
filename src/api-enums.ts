/**
 * This file holds all enums from
 * /electron/api
 * This should really be changed, but I don't know how
 * while playing well with Electron and React.
 */

export enum ChatType {
    PERSONAL='personal',
    GROUP='group',
    BROADCAST_LIST='broadcast list',
    STATUS_UPDATE='status update'
}

export enum GroupRole {
    MEMBER='member',
    ADMIN='admin'
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