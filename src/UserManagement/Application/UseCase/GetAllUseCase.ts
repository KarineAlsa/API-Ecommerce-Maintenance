import { User } from "../../Domain/Entity/User";
import  UserInterface  from "../../Domain/Port/UserInterface";

export default class GetAllUseCase {

    constructor(readonly repository:UserInterface) {}

    async run():Promise<User[]|any> {
        try {

            return await this.repository.listAll();

        }catch(error) {

        }
    }

}