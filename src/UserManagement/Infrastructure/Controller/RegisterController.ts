import { Request, Response } from "express";
import  RegisterUseCase  from "../../Application/UseCase/RegisterUseCase";


export default class RegisterController {

    constructor(readonly useCase:RegisterUseCase){}

    async run(request:Request,response:Response) {

        const mail = request.body.email
        const name = request.body.name
        const lastName = request.body.lastName
        const password = request.body.password
        const type = "new"
        if (mail != "" || name != "" || password != "" ){

        try {
            
            let user = await this.useCase.run({
                name: name,
                lastName: lastName,
                email: mail,
                password: password,
                type: type
            });
            if (user) {
                
                return response.status(200).json({data:user,message:"Usuario creado",success:true});
            } else {
                response.status(400).send({
                    data: "No data",
                    message: "No se pudo crear el usuario",
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

