import { Request, Response } from "express";
import  GetAllPromotionsUseCase  from "../../Application/UseCase/GetAllPromotionsUseCase";


export default class GetAllPromotionsController {

    constructor(readonly useCase:GetAllPromotionsUseCase){}

    async run(request:Request,response:Response) {
        try {
            
            let result = await this.useCase.run();
            if (result) {
                
                return response.status(200).json({data:result,message:"Promociones obtenidos",success:true});
            } else {
                response.status(400).send({
                    data: "No data",
                    message: "No se pudo encontrar ninguna promoción",
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

