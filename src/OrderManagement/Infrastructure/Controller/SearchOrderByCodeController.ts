import { Request, Response } from "express";
import  SearchOrderByCodeUseCase  from "../../Application/UseCase/SearchOrderByCodeUseCase";


export default class DeleteController {

    constructor(readonly useCase:SearchOrderByCodeUseCase){}

    async run(request:Request,response:Response) {

        const code_tracking = request.params.code_tracking
        if (code_tracking != ""  ){

        try {
            
            let result = await this.useCase.run({
                code_order:code_tracking
            });
            if (result) {
                
                return response.status(200).json({data:result,message:"Orden obtenida",success:true});
            } else {
                response.status(400).send({
                    data: "No data",
                    message: "No se pudo encontrar la orden",
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

