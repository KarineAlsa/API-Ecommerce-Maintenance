import  express  from "express";
import { createOrderController } from "../Dependencies";
import { searchOrderController } from "../Dependencies";
import { deleteOrderController } from "../Dependencies";
import { getAllOrdersController } from "../Dependencies";
import { updateOrderController } from "../Dependencies";
import { getOrderByCodeController } from "../Dependencies";
import {paymentMethodService} from "../Dependencies";

const orderRouter = express.Router();


orderRouter.post("/",createOrderController.run.bind(createOrderController, paymentMethodService));

orderRouter.get("/:id",searchOrderController.run.bind(searchOrderController));

orderRouter.get("/",getAllOrdersController.run.bind(getAllOrdersController));

orderRouter.delete("/:id",deleteOrderController.run.bind(deleteOrderController));

orderRouter.put("/:id",updateOrderController.run.bind(updateOrderController));

orderRouter.get("/cathegory/:cathegory",getOrderByCodeController.run.bind(getOrderByCodeController));



export default orderRouter;