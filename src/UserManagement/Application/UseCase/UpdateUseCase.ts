
import { User } from "../../Domain/Entity/User";
import  UserInterface  from "../../Domain/Port/UserInterface";
import * as crypto from 'crypto';

export default class RegisterUserUseCase {

    constructor(readonly repository:UserInterface) {}

    async run(id:string, updateFields:any):Promise<User|any> {
        try {

            return await this.repository.updateUser(id,updateFields);

        }catch(error) {

        }
    }

}