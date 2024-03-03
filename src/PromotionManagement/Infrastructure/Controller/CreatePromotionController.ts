import { Request, Response } from "express";
import  CreatePromotionUseCase  from "../../Application/UseCase/CreatePromotionUseCase";


export default class CreatePromotionController {

    constructor(readonly useCase:CreatePromotionUseCase){}

    async run(request:Request,response:Response) {
        const name = request.body.name
        const description = request.body.description
        const type = request.body.type
        const value = request.body.value
        const code = request.body.code
        
        if (type !="" && value!="" && code!=""){

        try {
            
            let promotion = await this.useCase.run({
                name: name,
                description: description,
                type: type,
                value: value,
                code: code,
                
            });
            if (promotion) {
                
                return response.status(200).json({data:promotion,message:"Promoción creada",success:true});
            } else {
                response.status(400).send({
                    data: "No data",
                    message: "No se pudo crear la promoción",
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

