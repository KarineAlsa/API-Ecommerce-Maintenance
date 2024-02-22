import express from "express";


const server = express();
const server_port =process.env.PORT;

server.use(express.json());


server.listen(process.env.PORT, () => {
console.log(`Server listening on http://localhost:${server_port}/`);
});