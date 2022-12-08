import * as Model from "./Model";

export interface ProviderAPI {
    getProviders(): Promise<Model.Provider[]>
    getProviderByID(id: number):  Promise<Model.Provider>
}

export interface ChatsAPI {
    getChats(params?: {
        sort?: string,
        limit?: number,
        page?: number,
        type?: Model.ChatType,
        fromDate?: Date
    }): Promise<Model.Chat[]>
    getChatByID(id: string): Promise<Model.Chat>
    getChatInfoForChat(id: string): Promise<Model.ChatInfo>
    getMessagesForChat(id: string, params?: {
        sort?: string,
        limit?: number,
        page?: number,
        fromID?: string,
        fromDate?: Date
    }): Promise<Model.Message[]>
}

export interface MessagesAPI {
    getMessageByID(id: string): Promise<Model.Message>
    getReceiptInfoForMessage(id: string): Promise<Model.MessageReceiptInfo[]>
    getReactionsForMessage(id: string): Promise<Model.MessageReaction[]>
}

export interface PeopleAPI {
    getPersonByID(id: string): Promise<Model.Person>
    getPeople(params?: {
        sort?: string,
        limit?: number,
        page?: number,
        phone?: string,
        name?: string
    }): Promise<Model.Person[]>
}

export interface MediaAPI {
    getMediaItemByID(id: string): Promise<Model.MediaItem>
}