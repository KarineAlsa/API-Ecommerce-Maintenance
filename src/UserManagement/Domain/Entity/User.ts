import { ObjectId } from 'mongodb';


export class User {

    public name:string;
    public lastName:string;
    public email:string;
    public password:string;
    public type:string;
    public id?:ObjectId

    constructor(
        name:string,
        lastName:string,
        email:string,
        password:string,
        type:string,
        id?:ObjectId
    ) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.type = type;
        this.id = id;
    }

}