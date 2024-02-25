import CreateProductUseCase from "../Application/UseCase/CreateProductUseCase";
import SearchProductUseCase from "../Application/UseCase/SearchProductUseCase";
import DeleteProductUseCase from "../Application/UseCase/DeleteProductUseCase";
import GetAllProductsUseCase from "../Application/UseCase/GetAllProductsUseCase";
import UpdateProductUseCase from "../Application/UseCase/UpdateProductUseCase";
import GetAllProductsByCathegoryUseCase from "../Application/UseCase/GetAllProductsByCathegoryUseCase";
import GetAllProductsByBrandUseCase from "../Application/UseCase/GetAllProductsByBrandUseCase";

import ProductMongooseRepository from "./Repository/MongoRepository"
import ProductMySQLRepository from "./Repository/MySQLRepository"

import CreateProductController from './Controller/CreateProductController'
import SearchProductController from './Controller/SearchProductController'
import DeleteProductController from './Controller/DeleteProductController'
import GetAllProductsController from './Controller/GetAllProductsController'
import UpdateProductController from './Controller/UpdateProductController'
import GetAllProductsByCathegoryController from './Controller/GetAllProductsByCathegoryController'
import GetAllProductsByBrandController from './Controller/GetAllProductsByBrandController'

export const productMongooseRepository = new ProductMongooseRepository();
export const productMySqlRepository = new ProductMySQLRepository();
export const currentRepository =  productMySqlRepository

export const createProductUseCase = new CreateProductUseCase(currentRepository);
export const searchProductUseCase = new SearchProductUseCase(currentRepository);
export const deleteProductUseCase = new DeleteProductUseCase(currentRepository);
export const getAllProductsUseCase = new GetAllProductsUseCase(currentRepository);
export const updateProductUseCase = new UpdateProductUseCase(currentRepository);
export const getAllProductsByCathegoryUseCase = new GetAllProductsByCathegoryUseCase(currentRepository);
export const getAllProductsByBrandUseCase = new GetAllProductsByBrandUseCase(currentRepository);


export const createProductController = new CreateProductController(createProductUseCase);
export const searchProductController = new SearchProductController(searchProductUseCase);
export const deleteProductController = new DeleteProductController(deleteProductUseCase);
export const getAllProductsController = new GetAllProductsController(getAllProductsUseCase);
export const updateProductController = new UpdateProductController(updateProductUseCase);
export const getAllProductsByCathegoryController = new GetAllProductsByCathegoryController(getAllProductsByCathegoryUseCase);
export const getAllProductsByBrandController = new GetAllProductsByBrandController(getAllProductsByBrandUseCase);