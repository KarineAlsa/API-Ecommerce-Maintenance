import { Request, Response } from "express";
import  GetAllOrdersUseCase  from "../../Application/UseCase/GetAllOrdersUseCase";


export default class GetAllOrdersController {

    constructor(readonly useCase:GetAllOrdersUseCase){}

    async run(request:Request,response:Response) {
        try {
            
            let result = await this.useCase.run();
            if (result) {
                
                return response.status(200).json({data:result,message:"Ordenes obtenidos",success:true});
            } else {
                response.status(400).send({
                    data: "No data",
                    message: "No se pudo encontrar ninguna orden",
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

