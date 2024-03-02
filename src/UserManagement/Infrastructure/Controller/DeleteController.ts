import { Request, Response } from "express";
import  DeleteUseCase  from "../../Application/UseCase/DeleteUseCase";


export default class DeleteController {

    constructor(readonly useCase:DeleteUseCase){}

    async run(request:Request,response:Response) {

        const id = request.params.id
        if (id != ""  ){

        try {
            
            let result = await this.useCase.run({
                id:id
            });
            if (result) {
                
                return response.status(200).json({data:"Eliminación",message:"Usuario eliminado",success:true});
            } else {
                response.status(400).send({
                    data: "No data",
                    message: "No se pudo eliminar el usuario",
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

