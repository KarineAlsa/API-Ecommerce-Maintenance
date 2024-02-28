import { Request, Response } from "express";
import  SearchProductUseCase  from "../../Application/UseCase/GetPromotionUseCase";


export default class GetOnePromotionController {

    constructor(readonly useCase:SearchProductUseCase){}

    async run(request:Request,response:Response) {

        const code = request.params.code
        if (code != ""  ){

        try {
            
            let result = await this.useCase.run({
                code:code
            });
            if (result) {
                
                return response.status(200).json({data:result,message:"Promoción obtenida",success:true});
            } else {
                response.status(400).send({
                    data: "No data",
                    message: "No se pudo encontrar la promoción",
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
                message: "Debe proveer información",
                success:false
            });
        }
    }
    }

