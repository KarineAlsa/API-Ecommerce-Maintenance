import  express  from "express";
import { createProductController } from "../Dependencies";
import { searchProductController } from "../Dependencies";
import { deleteProductController } from "../Dependencies";
import { getAllProductsController } from "../Dependencies";
import { updateProductController } from "../Dependencies";
import { getAllProductsByCathegoryController } from "../Dependencies";
import { getAllProductsByBrandController } from "../Dependencies";


const productRouter = express.Router();


productRouter.post("/",createProductController.run.bind(createProductController));

productRouter.get("/:id",searchProductController.run.bind(searchProductController));

productRouter.get("/",getAllProductsController.run.bind(getAllProductsController));

productRouter.delete("/:id",deleteProductController.run.bind(deleteProductController));

productRouter.put("/:id",updateProductController.run.bind(updateProductController));

productRouter.get("/cathegory/:cathegory",getAllProductsByCathegoryController.run.bind(getAllProductsByCathegoryController));

productRouter.get("/brand/:brand",getAllProductsByBrandController.run.bind(getAllProductsByBrandController));

export default productRouter;