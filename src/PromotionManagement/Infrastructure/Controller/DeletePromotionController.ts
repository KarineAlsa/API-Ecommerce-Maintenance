import { Request, Response } from "express";
import  DeletePromotionUseCase  from "../../Application/UseCase/DeletePromotionUseCase";


export default class DeleteProductController {

    constructor(readonly useCase:DeletePromotionUseCase){}

    async run(request:Request,response:Response) {

        const id = request.params.id
        if (id != ""  ){

        try {
            
            let result = await this.useCase.run({
                id:id
            });
            if (result) {
                
                return response.status(200).json({data:"Eliminación",message:"Promoción eliminada",success:true});
            } else {
                response.status(400).send({
                    data: "No data",
                    message: "No se pudo eliminar la promoción",
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

