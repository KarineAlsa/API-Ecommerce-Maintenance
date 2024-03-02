
import { User } from "../../Domain/Entity/User";
import  UserInterface  from "../../Domain/Port/UserInterface";
import { connectToDatabase } from '../../../Database/mongo';
import { collections } from "../../../Database/mongo";
import { ObjectId } from 'mongodb';
import bcrypt from 'bcrypt'

  export default class UserMongooseRepository implements UserInterface {
    async updateUser(id:string,updateFields:any): Promise<any> {
      try {
        
        const collectionName = "users"
        await connectToDatabase(collectionName);
        
        const pudate = updateFields
        const query = { _id: new ObjectId(id) };
        if(pudate.hasOwnProperty("password")){
          pudate.password = bcrypt.hashSync(pudate.password,10)
        }
        const user = await collections.name?.updateOne(query, { $set: pudate });
        
        if (user) {
            return true
        }
    } catch (error) {
        return "No se encontró con el id"
    }
    }

    async delete(id: string): Promise<any> {
      try {
        const collectionName = "users"
        await connectToDatabase(collectionName);
       
        const query = { _id: new ObjectId(id) };

        const result = await collections.name?.deleteOne(query);

        if (result) {
            return true;
        } else {
            throw new Error("Error al eliminar el usuario en la base de datos");
        }
    }catch (error) {
        throw new Error(`Error en la operación de eliminación`);
    }
    }
    async searchUserById(id: string): Promise<any> {
      try {
        const collectionName = "users"
        await connectToDatabase(collectionName);
       
        const query = { _id: new ObjectId(id) };

        const result = await collections.name?.findOne(query);

        if (result) {
            return {name:result.name,lastName:result.lastName,email:result.email,type:result.type}
            
        } else {
            throw new Error("Error al encontrar el usuario en la base de datos");
        }
    }catch (error) {
        throw new Error(`Error en la operación de búsqueda`);
    }
    }

    async registerUser(user:User): Promise<User|any> {
        try {
            const collectionName = "users"
            await connectToDatabase(collectionName);
            user.password = bcrypt.hashSync(user.password, 10);

            const result = await collections.name?.insertOne(user);

            if (result && result.insertedId) {
              return {id:result.insertedId,name:user.name,lastName:user.lastName,email:user.email,type:user.type}
              
            } else {
                throw new Error("Error al insertar el usuario en la base de datos");
            }
        }catch (error) {
            throw new Error(`Error en la operación de guardado`);
        }
    }


    async logout(activateToken:string): Promise<User | any> {
        return "logout exitoso"
      }


/*
    async findById(id: string|number): Promise<User | string> {
        try {
          const collectionName = "users"
          await connectToDatabase(collectionName);
          const query = { _id: new ObjectId(id) };
          const product= (await collections.name?.findOne(query)) as User|null;
  
          if (product) {
              return product
          }
      } catch (error) {
          return "No se encontró con el id"
      }
        return 'no se encontró'
      }*/
    async login(mail:string,password:string): Promise<User|any> {
        
        try {
          const collectionName = "users"
          await connectToDatabase(collectionName);
          
          const query = { "email":mail };
          const user= (await collections.name?.findOne(query)) as User|null;
          if (user){
            if(bcrypt.compareSync(password, user.password)  == true){

              return {id:user.id,name:user.name,lastName:user.lastName,email:user.email,type:user.type}
            }
            else{
              return null
            }
          }
          else{
            return null
          }
      } catch (error:any) {
        
          throw new Error(error)
          
      }

    }
    async listAll(): Promise<User[]|any> {
      try {
        const collectionName = "users"
        await connectToDatabase(collectionName);
        const users = (await collections.name?.find({}).toArray());
        
        if (users) {
          
          return users.map((user) => new User(user._id.toHexString(), user.name, user.lastName, user.email, user.type));
        } else {
        
          console.error('La consulta a la base de datos no devolvió resultados.');
          return 'Ocurrió un error';
        }
      } catch (error) {
        console.error(error);
        return 'Ocurrió un error';
      }
    }
    
  
}
