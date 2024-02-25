import { Request, Response } from "express";
import  GetAllProductsByBrandUseCase  from "../../Application/UseCase/GetAllProductsByBrandUseCase";


export default class GetAllProductsByCathegoryController {

    constructor(readonly useCase:GetAllProductsByBrandUseCase){}

    async run(request:Request,response:Response) {
        const brand = request.params.brand
        try {
            
            let result = await this.useCase.run(brand);
            if (result) {
                
                return response.status(200).json({data:result, message:`Productos de marca ${brand} obtenidos`, success:true});
            } else {
                response.status(400).send({
                    data: "No data",
                    message: `No se pudo encontrar productos de marca ${brand}`,
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

