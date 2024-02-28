import  express  from "express";
import { createPromotionController } from "../Dependencies";
import { getOnePromotionController } from "../Dependencies";
import { deletePromotionController } from "../Dependencies";
import { getAllPromotionsController } from "../Dependencies";

const promotionRouter = express.Router();

promotionRouter.post("/",createPromotionController.run.bind(createPromotionController));

promotionRouter.delete("/:id",deletePromotionController.run.bind(deletePromotionController));

promotionRouter.get("/:code",getOnePromotionController.run.bind(getOnePromotionController));

promotionRouter.get("/",getAllPromotionsController.run.bind(getAllPromotionsController));

export default promotionRouter;