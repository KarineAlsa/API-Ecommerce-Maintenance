import { User } from "../../Domain/Entity/User";
import  UserInterface  from "../../Domain/Port/UserInterface";

export default class GetByEmailUseCase {

    constructor(readonly repository:UserInterface) {}

    async run( { email}: {
        email: string;
        
      } ):Promise<User|any> {
        try {

            return await this.repository.searchUserById(email);

        }catch(error) {

        }
    }

}