import { Provider } from "../Entity/Provider";

export default interface ProviderInterface {
    createProvider(Provider:Provider):Promise<Provider|any>;
    searchProvider(id:string):Promise<Provider|any>
    deleteProvider(id:string):Promise<Provider|any>;
    listAllProviders():Promise<Provider[]|any>;
}