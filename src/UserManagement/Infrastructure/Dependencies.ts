import RegisterUserCase from "../Application/UseCase/RegisterUseCase";
import LoginUserCase from "../Application/UseCase/LoginUseCase";
import DeleteUserCase from "../Application/UseCase/DeleteUseCase";
import GetOneUserCase from "../Application/UseCase/GetOneUseCase";
import GetAllUserCase from "../Application/UseCase/GetAllUseCase";
import UpdateUserCase from "../Application/UseCase/UpdateUseCase";
import GetOrdersOfUserUseCase from "../Application/UseCase/GetOrdersoOfUserUseCase";

import UserMongooseRepository from "./Repository/UserMongoRepository"
import UserMySQLRepository from "./Repository/UserMysqlRepository"

import RegisterUserController from './Controller/RegisterController'
import LoginController from './Controller/LoginController'
import DeleteUserController from './Controller/DeleteController'
import GetOneUserController from './Controller/GetOneController'
import GetAllUsersController from './Controller/GetAllController'
import UpdateUserController from './Controller/UpdateController'
import GetOrdersOfUserController from './Controller/GetOrdersOfUserController'

export const userMongooseRepository = new UserMongooseRepository();
export const MySqlUserRepository = new UserMySQLRepository();
export const currentRepository =  userMongooseRepository

export const registerCase = new RegisterUserCase(currentRepository);
export const loginUserCase = new LoginUserCase(currentRepository);
export const deleteUserCase = new DeleteUserCase(currentRepository);
export const getOneUserCase = new GetOneUserCase(currentRepository);
export const getAllUserCase = new GetAllUserCase(currentRepository);
export const updateUserCase = new UpdateUserCase(currentRepository);
export const getOrdersOfUserUseCase = new GetOrdersOfUserUseCase(currentRepository);

export const registerController = new RegisterUserController(registerCase);
export const loginController = new LoginController(loginUserCase);
export const deleteController = new DeleteUserController(deleteUserCase);
export const getOneController = new GetOneUserController(getOneUserCase);
export const getAllController = new GetAllUsersController(getAllUserCase);
export const updateUserController = new UpdateUserController(updateUserCase);
export const getOrdersOfUsercontroller = new GetOrdersOfUserController(getOrdersOfUserUseCase);

