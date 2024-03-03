import  express  from "express";
import { createOrderController } from "../Dependencies";
import { searchOrderController } from "../Dependencies";
import { deleteOrderController } from "../Dependencies";
import { getAllOrdersController } from "../Dependencies";
import { updateOrderController } from "../Dependencies";
import { getOrderByCodeController } from "../Dependencies";


const orderRouter = express.Router();


orderRouter.post("/",createOrderController.run.bind(createOrderController));

orderRouter.get("/:id",searchOrderController.run.bind(searchOrderController));

orderRouter.get("/",getAllOrdersController.run.bind(getAllOrdersController));

orderRouter.delete("/:id",deleteOrderController.run.bind(deleteOrderController));

orderRouter.put("/:id",updateOrderController.run.bind(updateOrderController));

orderRouter.get("/status",getOrderByCodeController.run.bind(getOrderByCodeController));



export default orderRouter;