import { Provider } from "../../Domain/Entity/Provider";
import  ProviderInterface  from "../../Domain/Port/ProviderInterface";

export default class CreateProviderUseCase {

    constructor(readonly repository:ProviderInterface) {}

    async run( { company, cellphone  }: {
        company: string;
        cellphone: string; 
        
        
      } ):Promise<Provider|any> {
        try {

            let provider = new Provider(
                company,
                cellphone,
                  
            );

            return await this.repository.createProvider(provider);

        }catch(error) {

        }
    }

}