import { StringExpressionOperatorReturningString } from "mongoose";
import { User } from "../Entity/User";

export default interface UserInterface {
    registerUser(user:User):Promise<User|any>;
    searchUserById(token:string):Promise<User|any>;
    login(mail:string,password:string):Promise<User|any>;
    logout(token:string):Promise<User|any>;
    delete(id:string):Promise<User|any>;
    listAll():Promise<User[]|any>;
    updateUser(id:string,updateFields:any):Promise<User|any>;
}