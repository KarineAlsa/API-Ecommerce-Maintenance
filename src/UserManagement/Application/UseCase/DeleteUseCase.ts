import { User } from "../../Domain/Entity/User";
import  UserInterface  from "../../Domain/Port/UserInterface";

export default class DeleteUseCase {

    constructor(readonly repository:UserInterface) {}

    async run( { id}: {
        id: string;
        
      } ):Promise<User|any> {
        try {

            return await this.repository.delete(id);

        }catch(error) {

        }
    }

}