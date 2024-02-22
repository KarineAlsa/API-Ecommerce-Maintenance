import mysql from "mysql2/promise";


const config = {
  host: "localhost",
  database: "prueba",
  user: "root",
  password: "Kataraydione02",
  waitForConnections: true,
};


const connection_pool = mysql.createPool(config);

export default async function query(query_sentence: string, params: any[]) {
  try {
    const current_connection = await connection_pool.getConnection();
    console.log("Conexión a la base de datos exitosa.");
    const result = await current_connection.execute(query_sentence, params);
    current_connection.release();
    return result;
  } catch (error) {
    console.error("Ha ocurrido un error con tu peticion:" + error);
    return null;
  }
}