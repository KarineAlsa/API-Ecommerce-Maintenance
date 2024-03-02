import { Request, Response } from "express";
import  LoginUserCase  from "../../Application/UseCase/LoginUseCase";
export default class LoginController {

    constructor(readonly useCase:LoginUserCase){}

    async run(request:Request,response:Response) {
        const mail = request.body.email
        const password = request.body.password
        try {
            
            let orderItem = await this.useCase.run(mail,password);
            if (!orderItem){
                return response
                .status(401)
                .json({
                    data:orderItem, 
                    message:"Revise credenciales",
                    success:false});
            }
            else{
                console.log(orderItem)
                return response
                .status(200)
                .json({
                    data: orderItem,
                    message:"Login exitoso", 
                    success:true});
            }
            
           

        }catch(error:any) {
            response.status(error.http_status ?? 500)
                .json({
                    data:error,
                    message:"Error",
                    success:false
                });
        }
    }

}