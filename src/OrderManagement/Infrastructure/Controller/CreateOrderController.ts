import { Request, Response } from "express";
import  CreateOrderUseCase  from "../../Application/UseCase/CreateOrderUseCase";
import  Payment  from "../../Domain/Port/PaymentInterface";


export default class RegisterController {

    constructor(readonly useCase:CreateOrderUseCase, readonly payment:Payment){}

    async run(request:Request,response:Response) {

        const paymentMethod = request.body.paymentMethod
        const id_user = request.body.id_user
        const products = request.body.products
        const code_promotion = request.body.code_promotion
        const subtotal = request.body.subtotal
        const costo_envio = request.body.costo_envio
        const total = request.body.total
        if (paymentMethod != "" && id_user != "" && products != "" && code_promotion != "" && subtotal != "" && costo_envio != "" && total != ""){
            console.log(paymentMethod)
        try {
            if(await this.payment.pay(total,"mxn")){
            let order = await this.useCase.run({
                paymentMethod: paymentMethod,
                id_user: id_user,
                products: products,
                code_promotion: code_promotion,
                subtotal: subtotal,
                costo_envio: costo_envio,
                total: total
            });
            if (order) {
                
                return response.status(200).json({data:order,message:"Orden creada",success:true});
            } else {
                response.status(400).send({
                    data: "No data",
                    message: "No se pudo crear la orden",
                    success: false,
                });
            }}
        } catch (error) {
            console.log(error)
            response.status(500).send({
                data:error ,
                message: "Ha ocurrido un error durante su petición.",
                success:false
            });
        }
            

        }else{
            response.status(400).send({
                data:"Error",
                message: "Debe completar todos los datos",
                success:false
            });
        }
    }
    }

