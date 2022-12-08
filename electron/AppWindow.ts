import * as path from 'path';
import { BrowserWindow, IpcMain, ipcMain, IpcMainInvokeEvent } from 'electron';
import * as isDev from 'electron-is-dev';
import installExtension, { REACT_DEVELOPER_TOOLS } from "electron-devtools-installer";
import { ChatDataProviderStore } from './ChatDataProviderStore';
import { WhatsAppDataProvider } from './whatsapp-ios/WhatsAppDataProvider';
import { Chat, ChatInfo, Message, MessageReaction, MessageReceiptInfo, Person } from './api/Model';

class AppWindow {
    chatDataProviderStore: ChatDataProviderStore;
    win: BrowserWindow | null;

    constructor() {
        this.win = null;
        this.chatDataProviderStore =  new ChatDataProviderStore();

        this.chatDataProviderStore.registerChatDataProvider(
            1,
            WhatsAppDataProvider.getFactoryForPath('/Users/gabrielvondehn/Documents/whatsapp backup/whatsapp-backup-electron/test-data/sample-export-2022-12-01/AppDomainGroup-group.net.whatsapp.WhatsApp.shared', 1)
        );
        this.chatDataProviderStore.getDataProvider(1);
    }

    registerIPCHooks() {
        ipcMain.handle('get:/providers', (event: IpcMainInvokeEvent) => {
            return this.chatDataProviderStore.getAllDataProviders();
        });

        ipcMain.handle('get:/providers/:id', (event: IpcMainInvokeEvent, id: number) => {
            return this.chatDataProviderStore.getDataProvider(id);
        });

        let getProviderIDFromID = (id: string) => id.split(':')[0] as unknown as number;
        let getNativeIDFromID = (id: string) => id.split(':')[1];

        ipcMain.handle('get:/chats', async (event: IpcMainInvokeEvent, params?): Promise<Chat[]> => {
            return this.chatDataProviderStore.getAllDataProviders()
                .then(async (dataProviders) => {
                    let chats: Chat[] = [];

                    for(let i = 0; i < dataProviders.length; i++) {
                        let newChats = await dataProviders[i].chats.getChats(params);
                        chats = chats.concat(newChats);
                    }

                    if(!params) params = {}
                    if(!params.sort) params.sort = 'date-';
                    if(!params.limit) params.limit = 50;

                    const direction = params.sort.endsWith('+') ? 1 : -1;
                    const orderBy = params.sort.substring(0, params.sort.length-1);
                    const orderByDate = (a: Chat, b: Chat) => {
                        if(!a.lastMessageDate) return -1;
                        if(!b.lastMessageDate) return 1;

                        return a.lastMessageDate.valueOf() - b.lastMessageDate.valueOf();
                    }
                    const orderByID = (a: Chat, b: Chat) => {
                        return (a.id as unknown as number) - (b.id as unknown as number);
                    }
                    switch(orderBy) {
                        case 'date':
                            chats.sort((a,b) => direction * orderByDate(a,b));
                            break;
                        case 'id':
                            chats.sort((a,b) => direction * orderByID(a,b));
                            break;
                        default:
                            throw new Error(`Unknown sort parameter ${params.sort}`);
                    }

                    return chats.slice(0,params.limit);
                });
        });

        ipcMain.handle('get:/chats/:id', async (event: IpcMainInvokeEvent, id): Promise<Chat> => {
            return this.chatDataProviderStore.getDataProvider(getProviderIDFromID(id))
                .then((provider) => provider.chats.getChatByID(getNativeIDFromID(id)));
        });

        ipcMain.handle('get:/chats/:id/info', async (event: IpcMainInvokeEvent, id): Promise<ChatInfo> => {
            return this.chatDataProviderStore.getDataProvider(getProviderIDFromID(id))
                .then((provider) => provider.chats.getChatInfoForChat(getNativeIDFromID(id)));
        });

        ipcMain.handle('get:/chats/:id/messages', async (event: IpcMainInvokeEvent, id, params?) => {
            return this.chatDataProviderStore.getDataProvider(getProviderIDFromID(id))
                .then((provider) => provider.chats.getMessagesForChat(getNativeIDFromID(id), params));
        });

        ipcMain.handle('get:/messages/:id', async (event: IpcMainInvokeEvent, id: string) => {
            return this.chatDataProviderStore.getDataProvider(getProviderIDFromID(id))
                .then((provider) => provider.messages.getMessageByID(getNativeIDFromID(id)))
        });

        ipcMain.handle('get:/messages/:id/receiptinfo', async (event: IpcMainInvokeEvent, id): Promise<MessageReceiptInfo[]> => {
            return this.chatDataProviderStore.getDataProvider(getProviderIDFromID(id))
                .then((provider) => provider.messages.getReceiptInfoForMessage(getNativeIDFromID(id)));
        });

        ipcMain.handle('get:/messages/:id/reactions', async (event: IpcMainInvokeEvent, id): Promise<MessageReaction[]> => {
            return this.chatDataProviderStore.getDataProvider(getProviderIDFromID(id))
                .then((provider) => provider.messages.getReactionsForMessage(getNativeIDFromID(id)));
        });

        ipcMain.handle('get:/people', async (event: IpcMainInvokeEvent, params?): Promise<Person[]> => {
            return this.chatDataProviderStore.getAllDataProviders()
                .then(async (dataProviders) => {
                    let people: Person[] = [];

                    for(let i = 0; i < dataProviders.length; i++) {
                        let newPeople = await dataProviders[i].people.getPeople(params);
                        people = people.concat(newPeople);
                    }

                    if(!params) params = {}
                    if(!params.sort) params.sort = 'name+';
                    if(!params.limit) params.limit = 50;

                    const direction = params.sort.endsWith('+') ? 1 : -1;
                    const orderBy = params.sort.substring(0, params.sort.length-1);
                    const orderByName = (a: Person, b: Person) => {
                        if(!a.fullName) return -1;
                        if(!b.fullName) return 1;

                        return a.fullName.localeCompare(b.fullName);
                    }
                    const orderByID = (a: Person, b: Person) => {
                        return (a.id as unknown as number) - (b.id as unknown as number);
                    }
                    switch(orderBy) {
                        case 'sort':
                        case 'name':
                            people.sort((a,b) => direction * orderByName(a,b));
                            break;
                        case 'id':
                            people.sort((a,b) => direction * orderByID(a,b));
                            break;
                        default:
                            throw new Error(`Unknown sort parameter ${params.sort}`);
                    }

                    return people.slice(0,params.limit);
                });
        });

        ipcMain.handle('get:/people/:id', async (event: IpcMainInvokeEvent, id): Promise<Person> => {
            return this.chatDataProviderStore.getDataProvider(getProviderIDFromID(id))
                .then((provider) => provider.people.getPersonByID(getNativeIDFromID(id)));
        });
    }

    createWindow() {
        this.win = new BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                preload: path.join(__dirname, 'preload.js'),
            }
        });

        if (isDev) {
            this.win.loadURL('http://localhost:3000/index.html');
        } else {
            // 'build/index.html'
            this.win.loadURL(`file://${__dirname}/../index.html`);
        }
        
        this.win.on('closed', () => { this.win = null; });

        // Hot Reloading
        if (isDev) {
            // 'node_modules/.bin/electronPath'
            require('electron-reload')(__dirname, {
                electron: path.join(__dirname, '..', '..', 'node_modules', '.bin', 'electron'),
                forceHardReset: true,
                hardResetMethod: 'exit'
            });
        }

        // DevTools
        installExtension(REACT_DEVELOPER_TOOLS)
            .then((name) => console.log(`Added Extension:  ${name}`))
            .catch((err) => console.log('An error occurred: ', err));

        if (isDev) {
            this.win.webContents.openDevTools();
        }
    }

}

export default AppWindow;