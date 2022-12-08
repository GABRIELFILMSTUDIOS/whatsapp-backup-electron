import { contextBridge, ipcRenderer } from 'electron';
import { ChatsAPI, MessagesAPI, PeopleAPI, ProviderAPI } from './api/API';

export interface ContextBridgeAPI {
    providers: ProviderAPI,
    chats: ChatsAPI,
    messages: MessagesAPI,
    people: PeopleAPI
}

const exposedAPI: ContextBridgeAPI = {
    providers: {
        getProviders: () => ipcRenderer.invoke('get:/providers'),
        getProviderByID: (id) => ipcRenderer.invoke('get:/providers/:id', id)
    },
    chats: {
        getChats: (params?) => ipcRenderer.invoke('get:/chats', params),
        getChatByID: (id) => ipcRenderer.invoke('get:/chats/:id', id),
        getChatInfoForChat: (id) => ipcRenderer.invoke('get:/chats/:id/info', id),
        getMessagesForChat: (id, params?) => ipcRenderer.invoke('get:/chats/:id/messages', id, params)
    },
    messages: {
        getMessageByID: (id) => ipcRenderer.invoke('get:/messages/:id', id),
        getReceiptInfoForMessage: (id) => ipcRenderer.invoke('get:/messages/:id/receiptinfo', id),
        getReactionsForMessage: (id) => ipcRenderer.invoke('get:/messages/:id/reactions', id)
    },
    people: {
        getPeople: (params?) => ipcRenderer.invoke('get:/people', params),
        getPersonByID: (id) => ipcRenderer.invoke('get:/people/:id', id)
    }
}

contextBridge.exposeInMainWorld('api', exposedAPI);

/**
export interface ContextBridgeChatDataAPI {
    loadChats(providerKey: string): Promise<API.Chat[]>
    loadChatForId(providerKey: string, id: number): Promise<API.Chat>
}

export interface ContextBridgeChatAPI {
    loadMessages(providerKey: string, chatID: number): Promise<API.Message[]>,
    loadMessagesByDate(providerKey: string, chatID: number, from: Date, limit: number, shouldLoadAsc?: boolean): Promise<API.Message[]>
}

export interface ContextBridgeMessageAPI {
    //loadMessageInfo(providerKey: string, messageID: number): Promise<API.MessageInfo>
}

export interface ContextBridgeAPI {
    // loadDataProviderForPath: (providerKey: string, dbPath: string) => Promise<ChatAppData>
    data_provider: ContextBridgeChatDataAPI
    chat: ContextBridgeChatAPI
    message: ContextBridgeMessageAPI
}

const exposedAPI: ContextBridgeAPI = {
    //loadDataProviderForPath: (providerKey, dbPath) => ipcRenderer.invoke('data_provider:load', providerKey, dbPath),
    data_provider: {
        loadChats: (providerKey: string) =>
            ipcRenderer.invoke('chat_store:load_chats', providerKey),

        loadChatForId: (providerKey: string, id: number) =>
            ipcRenderer.invoke('chat_store:load_chat_for_id', providerKey, id)
    },
    chat: {
        loadMessages: (providerKey: string, chatID: number) =>
            ipcRenderer.invoke('chat:load_messages', providerKey, chatID),

        loadMessagesByDate: (providerKey: string, chatID: number, from: Date, limit: number, shouldLoadAsc?: boolean) =>
            ipcRenderer.invoke('chat:load_messages_by_date', providerKey, chatID, from, limit, shouldLoadAsc)
    },
    message: {
        loadMessageInfo: (providerKey: string, messageID: number) =>
            ipcRenderer.invoke('message:load_info', providerKey, messageID)
    }
}

contextBridge.exposeInMainWorld('api', exposedAPI);*/