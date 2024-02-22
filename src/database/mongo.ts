import * as mongoDB from "mongodb";

export const collections: { name?: mongoDB.Collection } = {};

export async function connectToDatabase(collectionName : string) {

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    "mongodb://localhost:27017"
  );

  await client.connect();

  const db: mongoDB.Db = client.db("prueba");

  const productCollection: mongoDB.Collection = db.collection(collectionName);

  collections.name = productCollection;

  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${productCollection.collectionName}`
  );
}
