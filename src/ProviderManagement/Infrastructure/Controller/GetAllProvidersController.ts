import { Request, Response } from "express";
import  GetAllProvidersUseCase  from "../../Application/UseCase/GetAllProvidersUseCase";


export default class GetAllProvidersController {

    constructor(readonly useCase:GetAllProvidersUseCase){}

    async run(request:Request,response:Response) {
        try {
            
            let result = await this.useCase.run();
            if (result) {
                
                return response.status(200).json({data:result,message:"Proveedores obtenidos",success:true});
            } else {
                response.status(400).send({
                    data: "No data",
                    message: "No se pudo encontrar ningún proveedor",
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

