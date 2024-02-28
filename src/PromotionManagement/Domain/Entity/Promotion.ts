import { ObjectId } from 'mongodb';


export class Promotion {

    public type:string;
    public value:number;
    public code:string;
    public id?:ObjectId

    constructor(
        type:string,
        value:number,
        code:string,
        id?:ObjectId
    ) {
        this.type = type;
        this.value = value;
        this.code = code;
        
    }

}