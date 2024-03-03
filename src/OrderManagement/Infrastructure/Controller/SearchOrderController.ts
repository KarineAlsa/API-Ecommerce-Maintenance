import { Request, Response } from "express";
import  SearchOrderUseCase  from "../../Application/UseCase/SearchOrderUseCase";


export default class DeleteController {

    constructor(readonly useCase:SearchOrderUseCase){}

    async run(request:Request,response:Response) {

        const id = request.params.id
        if (id != ""  ){

        try {
            
            let result = await this.useCase.run({
                id:id
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

