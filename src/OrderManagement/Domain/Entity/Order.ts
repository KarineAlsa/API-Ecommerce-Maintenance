import { ObjectId } from 'mongodb';


export class Order {

    public paymentMethod:string;
    public id_user:any;
    public products:Array<any>;
    public code_promotion:string;
    public subtotal:number;
    public costo_envio:number
    public total:number;
    public code_tracking?:string;
    public status?:string;
    public id?:ObjectId

    constructor(
        paymentMethod:string,
        id_user:number,
        products:Array<any>,
        code_promotion:string,
        subtotal:number,
        costo_envio:number,
        total:number,
        code_tracking?:string,
        status?:string,
        id?:ObjectId
    ) {
        this.paymentMethod = paymentMethod;
        this.id_user = id_user;
        this.products = products;
        this.code_promotion = code_promotion;
        this.subtotal = subtotal;
        this.costo_envio = costo_envio;
        this.total = total;
        this.code_tracking = code_tracking;
        this.status = status;
        this.id = id;
    }

}