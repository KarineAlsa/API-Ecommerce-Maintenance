import { Provider } from "../../Domain/Entity/Provider";
import  ProviderInterface  from "../../Domain/Port/ProviderInterface";

export default class GetAllProvidersUseCase {

    constructor(readonly repository:ProviderInterface) {}

    async run():Promise<Provider[]|any> {
        try {

            return await this.repository.listAllProviders();

        }catch(error) {

        }
    }

}