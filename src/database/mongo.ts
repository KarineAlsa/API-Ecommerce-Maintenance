import * as mongoDB from "mongodb";
import dotenv from 'dotenv'
dotenv.config()

export const collections: { name?: mongoDB.Collection } = {};

export async function connectToDatabase(collectionName : string) {

  if (!process.env.MONGO_CLIENT) {
    throw new Error("MONGO_CLIENT environment variable is not defined");
  }
  if (!process.env.DATABASE_NAME) {
    throw new Error("DATABASE_NAME environment variable is not defined");
  }

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    process.env.MONGO_CLIENT
  );

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DATABASE_NAME);

  const productCollection: mongoDB.Collection = db.collection(collectionName);

  collections.name = productCollection;

  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${productCollection.collectionName}`
  );
}
