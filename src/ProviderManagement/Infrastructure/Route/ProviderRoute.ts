import  express  from "express";
import { createProviderController } from "../Dependencies";
import { deleteController } from "../Dependencies";
import { getOneController } from "../Dependencies";
import { getAllController } from "../Dependencies";


const providerRouter = express.Router();

providerRouter.post("/add",createProviderController.run.bind(createProviderController));
providerRouter.delete("/:id",deleteController.run.bind(deleteController));
providerRouter.get("/:id",getOneController.run.bind(getOneController));
providerRouter.get("/",getAllController.run.bind(getAllController));

export default providerRouter;