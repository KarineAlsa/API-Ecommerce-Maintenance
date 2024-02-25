import { Request, Response } from "express";
import  GetAllProductsUseCase  from "../../Application/UseCase/GetAllProductsUseCase";


export default class GetAllProductsController {

    constructor(readonly useCase:GetAllProductsUseCase){}

    async run(request:Request,response:Response) {
        try {
            
            let result = await this.useCase.run();
            if (result) {
                
                return response.status(200).json({data:result,message:"Productos obtenidos",success:true});
            } else {
                response.status(400).send({
                    data: "No data",
                    message: "No se pudo encontrar ningún producto",
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
            
    }
    }

