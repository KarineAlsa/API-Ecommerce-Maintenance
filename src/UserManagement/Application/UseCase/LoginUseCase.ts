import {User} from "../../Domain/Entity/User";
import userRepository from "../../Domain/Port/UserInterface";

export default class GetOneCase {
    constructor(readonly productRepository: userRepository) {}

    async run(mail:string, password:string): Promise<User | any> {
        try {
        const result = await this.productRepository.login(mail,password);
        return result;
        } catch {
        return 'ocurrió un error';
        }
    }
}