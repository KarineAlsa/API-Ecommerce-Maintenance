import express from "express";
import dotenv from 'dotenv'
import userRoutes from './UserManagement/Infrastructure/Route/UserRoute'
import productRoutes from './ProductManagement/Infrastructure/Route/ProductRoute'
import providerRoutes from './ProviderManagement/Infrastructure/Route/ProviderRoute'
import promotionRoutes from './PromotionManagement/Infrastructure/Route/PromotionRoute'
import orderRoutes from './OrderManagement/Infrastructure/Route/OrderRoute'
dotenv.config()
const server = express();
const server_port =process.env.PORT;

server.use(express.json());
server.use('/client', userRoutes)
server.use('/product', productRoutes)
server.use('/provider', providerRoutes)
server.use('/promotion', promotionRoutes)
server.use('/order', orderRoutes)

server.listen(process.env.PORT, () => {
console.log(`Server listening on http://localhost:${server_port}/`);
});