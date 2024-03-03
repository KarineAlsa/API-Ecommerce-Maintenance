import { ObjectId } from 'mongodb';


export class Promotion {

    public name:string;
    public description:string;
    public type:string;
    public value:number;
    public code:string;
    public id?:ObjectId

    constructor(
        name:string,
        description:string,
        type:string,
        value:number,
        code:string,
        id?:ObjectId
    ) {
        this.name = name;
        this.description = description;
        this.type = type;
        this.value = value;
        this.code = code;
        this.id = id;
    }

}