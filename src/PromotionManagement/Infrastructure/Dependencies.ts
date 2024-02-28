import CreatePromotionUseCase from "../Application/UseCase/CreatePromotionUseCase";
import DeletePromotionUseCase from "../Application/UseCase/DeletePromotionUseCase";
import GetAllPromotionsUseCase from "../Application/UseCase/GetAllPromotionsUseCase";
import GetPromotionUseCase from "../Application/UseCase/GetPromotionUseCase";

import PromotionMongooseRepository from "./Repository/MongoRepository"
import PromotionMySQLRepository from "./Repository/MySQLRepository"

import CreatePromotionController from './Controller/CreatePromotionController'
import DeletePromotionController from './Controller/DeletePromotionController'
import GetOnePromotionController from './Controller/GetOnePromotionController'
import GetAllPromotionsController from './Controller/GetAllPromotionsController'

export const promotionMongooseRepository = new PromotionMongooseRepository();
export const MySqlpromotionRepository = new PromotionMySQLRepository();
export const currentRepository =  promotionMongooseRepository

export const createPromotionUseCase = new CreatePromotionUseCase(currentRepository);
export const deletePdromotionUseCase = new DeletePromotionUseCase(currentRepository);
export const getAllPromotionsUseCase = new GetAllPromotionsUseCase(currentRepository);
export const getOnePromotionUseCase = new GetPromotionUseCase(currentRepository);


export const createPromotionController = new CreatePromotionController(createPromotionUseCase);
export const deletePromotionController = new DeletePromotionController(deletePdromotionUseCase);
export const getOnePromotionController = new GetOnePromotionController(getOnePromotionUseCase);
export const getAllPromotionsController = new GetAllPromotionsController(getAllPromotionsUseCase);
