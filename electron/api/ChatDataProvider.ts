import { ChatsAPI, MessagesAPI, PeopleAPI, MediaAPI } from "./API"
import { Provider } from "./Model"

export interface ChatDataProvider extends Provider {
    readonly chats: ChatsAPI
    readonly messages: MessagesAPI
    readonly people: PeopleAPI
    readonly media: MediaAPI
}