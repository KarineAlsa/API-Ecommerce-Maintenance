import { Request, Response } from "express";
import  UpdateOrderUseCase  from "../../Application/UseCase/UpdateOrderUseCase";
import { Order } from "../../Domain/Entity/Order";
import {NodemailerEmailService} from "../Service/Email"
import  GetUserUseCase  from "../../../UserManagement/Application/UseCase/GetOneUseCase";

export default class RegisterController {

    constructor(readonly useCase:UpdateOrderUseCase,  readonly emailService: NodemailerEmailService, readonly userPort:GetUserUseCase){}

    async run(request:Request,response:Response) {
        const id=request.params.id
        const updateFields: Partial<Order> = request.body;
        if (id !=""){

        try {
            
            let order = await this.useCase.run(id, updateFields);
            if (order) {
                let user = await this.userPort.run({id:order.id_user});
                console.log(order.id_user)
                const message = `Hola ${user.name}, este correo es para notificarte que tu orden con el código de seguimiento ${order.code_tracking} ha sido actualizada a ${order.status}`;
                
                await this.emailService.sendEmail(user.email, "Actualización de pedido", message);
                return response.status(200).json({data:order,message:"Orden actualizado",success:true});
            } else {
                response.status(400).send({
                    data: "No data",
                    message: "No se pudo actualizar la orden",
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
                message: "Error",
                success:false
            });
        }
    }
    }

