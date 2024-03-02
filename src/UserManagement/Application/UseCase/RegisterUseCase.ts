
import { User } from "../../Domain/Entity/User";
import  UserInterface  from "../../Domain/Port/UserInterface";
import * as crypto from 'crypto';

function generarToken(longitud: number): string {
    const buffer = crypto.randomBytes(Math.ceil(longitud / 2));
    return buffer.toString('hex').slice(0, longitud);
}

export default class RegisterUserUseCase {

    constructor(readonly repository:UserInterface) {}

    async run( { name, lastName, email, password,type }: {
        name: string;
        lastName: string; 
        email: string;
        password: string;
        type: string;
      } ):Promise<User|any> {
        try {

            let user = new User(
                name,
                lastName,
                email,
                password,
                type
                
            );

            return await this.repository.registerUser(user);

        }catch(error) {

        }
    }

}