import { ChatDataProvider } from './api/ChatDataProvider';

export class ChatDataProviderStore {
    private dataProviders: {
        factory: () => Promise<ChatDataProvider>,
        hasStartedLoading: boolean,
        errorLoading?: Error,
        hasFinishedLoading: boolean,
        callbacksOnLoaded: ((provider: ChatDataProvider) => void)[]
        provider?: ChatDataProvider
    }[] = []

    registerChatDataProvider(id: number, factory: () => Promise<ChatDataProvider>) {
        if(this.dataProviders[id]) throw Error(`Tried registering duplicate Data Provider for ID ${id}`);

        this.dataProviders[id] = {
            factory: factory,
            hasStartedLoading: false,
            errorLoading: undefined,
            hasFinishedLoading: false,
            callbacksOnLoaded: []
        }
    }

    async getDataProvider(id: number): Promise<ChatDataProvider> {
        if(!this.dataProviders[id])
            throw Error(`No data provider registered with ID ${id}`);
        
        const provider = this.dataProviders[id];

        if(provider.provider)
            return provider.provider;

        if(provider.errorLoading)
            throw provider.errorLoading;

        if(provider.hasStartedLoading) {
            // Load new callback to return resolve the promise when the provider has finished loading
            return new Promise((resolve) => {
                provider.callbacksOnLoaded.push((provider) => resolve(provider));
            });
        }
        
        // Has not yet started loading, so start loading
        provider.hasStartedLoading = true;
        return provider.factory()
            .then((provider) => {
                this.dataProviders[id].hasFinishedLoading = true;
                this.dataProviders[id].provider = provider;
                this.dataProviders[id].callbacksOnLoaded
                    .forEach((callback) => callback(provider));

                return provider;
            })
            .catch((err) => {
                this.dataProviders[id].errorLoading = err;
                throw err;
            });
    }

    async getAllDataProviders(): Promise<ChatDataProvider[]> {
        let providers: ChatDataProvider[] = [];

        for(let i = 0; i < this.dataProviders.length; i++ ) {
            if(this.dataProviders[i])
                providers.push(await this.getDataProvider(i));
        }

        return providers;
    }
}