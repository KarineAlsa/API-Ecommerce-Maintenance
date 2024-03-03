import { Request, Response } from "express";
import  CreateProviderUseCase  from "../../Application/UseCase/CreateProviderUseCase";


export default class CreateProviderController {

    constructor(readonly useCase:CreateProviderUseCase){}

    async run(request:Request,response:Response) {

        const company = request.body.company
        const cellphone = request.body.cellphone
     
        if (company !="" && cellphone!="" ){
        try {
            
            let provider = await this.useCase.run({
                company: company,
                cellphone: cellphone
                
            });
            if (provider) {
                
                return response.status(200).json({data:provider,message:"Proveedor añadido",success:true});
            } else {
                response.status(400).send({
                    data: "No data",
                    message: "No se pudo añadir al proveedor",
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

