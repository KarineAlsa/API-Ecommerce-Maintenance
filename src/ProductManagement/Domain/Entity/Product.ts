import { ObjectId } from 'mongodb';


export class Product {

    public name:string;
    public price:number;
    public description:string;
    public cathegory:string;
    public brand:string;
    public provider_id:number
    public id?:ObjectId

    constructor(
        name:string,
        price:number,
        description:string,
        cathegory:string,
        brand:string,
        provider_id:number,
        id?:ObjectId
    ) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.cathegory = cathegory;
        this.brand = brand;
        this.provider_id = provider_id;
    }

}