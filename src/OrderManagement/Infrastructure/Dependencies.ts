import CreateOrderUseCase from "../Application/UseCase/CreateOrderUseCase";
import SearchOrderUseCase from "../Application/UseCase/SearchOrderUseCase";
import DeleteOrderUseCase from "../Application/UseCase/DeleteOrderUseCase";
import GetAllOrdersUseCase from "../Application/UseCase/GetAllOrdersUseCase";
import UpdateOrderUseCase from "../Application/UseCase/UpdateOrderUseCase";
import GetOrderByCodeUseCase from "../Application/UseCase/SearchOrderByCodeUseCase";

import PaymentMethodStripeService from "./Service/paymentService";

import OrderMongooseRepository from "./Repository/MongoRepository"


import CreateOrderController from './Controller/CreateOrderController'
import SearchOrderController from './Controller/SearchOrderController'
import DeleteOrderController from './Controller/DeleteOrderController'
import GetAllOrdersController from './Controller/GetAllOrdersController'
import UpdateOrderController from './Controller/UpdateOrderController'
import GetOrderByCodeController from './Controller/SearchOrderByCodeController'


export const orderMongooseRepository = new OrderMongooseRepository();

export const currentRepository =  orderMongooseRepository

export const createOrderUseCase = new CreateOrderUseCase(currentRepository);
export const searchOrderUseCase = new SearchOrderUseCase(currentRepository);
export const deleteOrderUseCase = new DeleteOrderUseCase(currentRepository);
export const getAllOrdersUseCase = new GetAllOrdersUseCase(currentRepository);
export const updateOrderUseCase = new UpdateOrderUseCase(currentRepository);
export const getOrderByCodeUseCase = new GetOrderByCodeUseCase(currentRepository);
export const paymentMethodService = new PaymentMethodStripeService();

export const createOrderController = new CreateOrderController(createOrderUseCase, paymentMethodService);
export const searchOrderController = new SearchOrderController(searchOrderUseCase);
export const deleteOrderController = new DeleteOrderController(deleteOrderUseCase);
export const getAllOrdersController = new GetAllOrdersController(getAllOrdersUseCase);
export const updateOrderController = new UpdateOrderController(updateOrderUseCase);
export const getOrderByCodeController = new GetOrderByCodeController(getOrderByCodeUseCase);