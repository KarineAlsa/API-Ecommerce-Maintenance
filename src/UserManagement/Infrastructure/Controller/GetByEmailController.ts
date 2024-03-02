import { Request, Response } from "express";
import  GetByEmailUseCase  from "../../Application/UseCase/GetByEmailUseCase";


export default class DeleteController {

    constructor(readonly useCase:GetByEmailUseCase){}

    async run(request:Request,response:Response) {

        const email = request.body.email
        if (email != ""  ){

        try {
            
            let result = await this.useCase.run({
                email:email
            });
            if (result) {
                
                return response.status(200).json({data:result,message:"Usuario obtenido",success:true});
            } else {
                response.status(400).send({
                    data: "No data",
                    message: "No se pudo encontrar el usuario",
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

