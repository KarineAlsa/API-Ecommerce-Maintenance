import  express  from "express";
import { registerController } from "../Dependencies";
import { loginController } from "../Dependencies";
import { deleteController } from "../Dependencies";
import { getOneController } from "../Dependencies";
import { getAllController } from "../Dependencies";
import { updateUserController } from "../Dependencies";

const userRouter = express.Router();


userRouter.post("/register",registerController.run.bind(registerController));
userRouter.post("/login", loginController.run.bind(loginController));
userRouter.delete("/:id",deleteController.run.bind(deleteController));
userRouter.get("/:id",getOneController.run.bind(getOneController));
userRouter.get("/",getAllController.run.bind(getAllController));
userRouter.put("/:id",updateUserController.run.bind(updateUserController));
export default userRouter;