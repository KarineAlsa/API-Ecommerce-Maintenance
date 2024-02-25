import { Request, Response } from "express";
import  CreateProductUseCase  from "../../Application/UseCase/CreateProductUseCase";


export default class RegisterController {

    constructor(readonly useCase:CreateProductUseCase){}

    async run(request:Request,response:Response) {

        const name = request.body.name
        const price = request.body.price
        const description = request.body.description
        const cathegory = request.body.cathegory
        const brand = request.body.brand
        const provider_id = request.body.provider_id
        if (name != "" || price != "" || description != "" || cathegory != "" || brand != "" || provider_id != "" ){

        try {
            
            let product = await this.useCase.run({
                name: name,
                price: price,
                description: description,
                cathegory: cathegory,
                brand: brand,
                provider_id: provider_id
            });
            if (product) {
                
                return response.status(200).json({data:product,message:"Producto creado",success:true});
            } else {
                response.status(400).send({
                    data: "No data",
                    message: "No se pudo crear el producto",
                    success: false,
                });
            }
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

