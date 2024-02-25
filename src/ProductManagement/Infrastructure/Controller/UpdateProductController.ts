import { Request, Response } from "express";
import  UpdateProductUseCase  from "../../Application/UseCase/UpdateProductUseCase";
import { Product } from "../../Domain/Entity/Product";


export default class RegisterController {

    constructor(readonly useCase:UpdateProductUseCase){}

    async run(request:Request,response:Response) {
        const id=request.params.id
        const updateFields: Partial<Product> = request.body;
        if (id !=""){

        try {
            
            let user = await this.useCase.run(id, updateFields);
            if (user) {
                
                return response.status(200).json({data:user,message:"Producto actualizado",success:true});
            } else {
                response.status(400).send({
                    data: "No data",
                    message: "No se pudo actualizar el producto",
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
                message: "Error",
                success:false
            });
        }
    }
    }

