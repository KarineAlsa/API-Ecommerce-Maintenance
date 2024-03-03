import { Provider } from "../../Domain/Entity/Provider";
import  ProviderInterface  from "../../Domain/Port/ProviderInterface";

export default class SearchProductUseCase {

    constructor(readonly repository:ProviderInterface) {}

    async run( { id}: {
        id: string;
        
      } ):Promise<Provider|any> {
        try {

            return await this.repository.searchProvider(id);

        }catch(error) {

        }
    }

}