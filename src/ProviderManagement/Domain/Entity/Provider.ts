import { ObjectId } from 'mongodb';


export class Provider {

    public company:string;
    public cellphone:string;
    public id?:ObjectId

    constructor(
        company:string,
        cellphone:string,
        id?:ObjectId
    ) {
        this.company = company;
        this.cellphone = cellphone;
        this.id = id;
        
    }

}