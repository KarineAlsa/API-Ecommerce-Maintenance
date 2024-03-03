import CreateProviderUseCase from "../Application/UseCase/CreateProviderUseCase"
import DeleteProviderUseCase from "../Application/UseCase/DeleteProviderUseCase";
import GetOneProviderUseCase from "../Application/UseCase/GetProviderUseCase";
import GetAllProvidersUseCase from "../Application/UseCase/GetAllProvidersUseCase";


import UserMongooseRepository from "./Repository/MongoRepository"
import UserMySQLRepository from "./Repository/MySQLRepository"

import CreateProviderController from './Controller/CreateProviderController'
import DeleteProviderController from './Controller/DeleteProviderController'
import GetOneProviderController from './Controller/GetOneProviderController'
import GetAllProvidersController from './Controller/GetAllProvidersController'


export const userMongooseRepository = new UserMongooseRepository();
export const MySqlUserRepository = new UserMySQLRepository();
export const currentRepository =  userMongooseRepository

export const registerCase = new CreateProviderUseCase(currentRepository);
export const deleteProviderCase = new DeleteProviderUseCase(currentRepository);
export const getOneProviderCase = new GetOneProviderUseCase(currentRepository);
export const getAllProviderCase = new GetAllProvidersUseCase(currentRepository);

export const createProviderController = new CreateProviderController(registerCase);
export const deleteController = new DeleteProviderController(deleteProviderCase);
export const getOneController = new GetOneProviderController(getOneProviderCase);
export const getAllController = new GetAllProvidersController(getAllProviderCase);

