import { Request, Response } from "express";
import  GetAllProductsByCathegoryUseCase  from "../../Application/UseCase/GetAllProductsByCathegoryUseCase";


export default class GetAllProductsByCathegoryController {

    constructor(readonly useCase:GetAllProductsByCathegoryUseCase){}

    async run(request:Request,response:Response) {
        const cathegory = request.params.cathegory
        try {
            
            let result = await this.useCase.run(cathegory);
            if (result) {
                
                return response.status(200).json({data:result, message:`Productos de categoría ${cathegory} obtenidos`, success:true});
            } else {
                response.status(400).send({
                    data: "No data",
                    message: `No se pudo encontrar productos de categoría ${cathegory}`,
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

