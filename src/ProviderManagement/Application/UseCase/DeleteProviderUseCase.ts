import { Provider } from "../../Domain/Entity/Provider";
import  ProviderInterface  from "../../Domain/Port/ProviderInterface";

export default class DeleteProviderUseCase {

    constructor(readonly repository:ProviderInterface) {}

    async run( { id}: {
        id: string;
        
      } ):Promise<Provider|any> {
        try {

            return await this.repository.deleteProvider(id);

        }catch(error) {

        }
    }

}