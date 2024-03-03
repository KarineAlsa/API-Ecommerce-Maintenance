import express from "express";
import dotenv from 'dotenv'
import userRoutes from './UserManagement/Infrastructure/Route/UserRoute'
import productRoutes from './ProductManagement/Infrastructure/Route/ProductRoute'
import providerRoutes from './ProviderManagement/Infrastructure/Route/ProviderRoute'

dotenv.config()
const server = express();
const server_port =process.env.PORT;

server.use(express.json());
server.use('/client', user)

server.listen(process.env.PORT, () => {
console.log(`Server listening on http://localhost:${server_port}/`);
});