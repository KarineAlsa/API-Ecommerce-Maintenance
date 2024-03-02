import { User } from "../../Domain/Entity/User";
import UserInterface  from "../../Domain/Port/UserInterface";
import bcrypt, { hashSync } from 'bcrypt'
import query from "../../../Database/mysql";

export default class UserMysqlRepository implements UserInterface {
  async updateUser(id: string, updateFields:any): Promise<any> {
    let updateQuery = "UPDATE users SET ";
    const params: any[] = [];
    Object.entries(updateFields).forEach(([key, value]) => {
      if(key=="password"){
        if (typeof value === 'string') {
          value = bcrypt.hashSync(value, 10);
        } else {
          throw new Error("El valor del campo 'password' no es una cadena");
        }
      }
      updateQuery += `${key} = ?, `;
      params.push(value);
    });
    updateQuery = updateQuery.slice(0, -2);
    updateQuery += " WHERE id = ?";
    params.push(id);
    try {
      const [result]: any = await query(updateQuery, params);

      if (result && result.affectedRows > 0) {
        return true
      } else {
        throw new Error("No se pudo actualizar el usuario");
      }
    } catch (error) {
      throw new Error(`Error en la operación de actualización`);
    }

  }

  async listAll(): Promise<any> {
    const sql = "SELECT * FROM users";
    const params: any[] = [];
    try {
      const [result]: any = await query(sql, params);
      console.log(result)
      if (result){
        return result
      }
      else {
        return "No hay usuarios";
      }
    }
    catch (error) {
      return "ocurrió un error";
    }
  }

  async delete(id: string): Promise<any> {
    const sql = "DELETE FROM users WHERE id = ?";
    const params: any[] = [id];
    try {
      const [result]: any = await query(sql, params);
      console.log(result);
      return result
    }

    catch (error) {
    throw new Error(`Error en la operación de eliminación`);
    }

  }

  async registerUser(user: User): Promise<any> {
    const sql = "INSERT INTO users (name, lastName,email,password,type) VALUES (?,?,?,?,?)";
    const hash = bcrypt.hashSync(user.password, 10);
    const params: any[] = [user.name, user.lastName,user.email,hash,user.type];
    try {
      const [result]: any = await query(sql, params);
      console.log(result);

    if (result) {
      result.id = result.insertId
      return user

    } else {
      throw new Error("Error al insertar el usuario en la base de datos");
    }
    }
    catch (error) {
    throw new Error(`Error en la operación de guardado`);
    }
  }

  async searchUserById(id: string): Promise<any> {
    const sql = "SELECT * FROM users WHERE id = ?";
    const params: any[] = [id];
    try {
      const [[result]]: any = await query(sql, params);
          
      if (result){
        return {id:result.id,name:result.name, lastName: result.lastName, email:result.email, type:result.type};
      }
      else {
        return false;
      }
    }catch (error) {
        return false;
      }
  }

  async login(mail: string, password: string): Promise<any> {
    const sql = "SELECT * FROM users WHERE email = ?";
    const params: any[] = [mail];
    try {
      const [[result]]: any = await query(sql, params);
          
      if (result){
        
        if(bcrypt.compareSync(password, result.password) == true){
          return {id:result.id,name:result.name, lastName: result.lastName, email:result.email, type:result.type};
        }
        else{
          return false
        }
      }
      else {
        return "No existe el usuario";
      }
    }catch (error) {
        return "ocurrió un error";
      }
  }

  async logout(token: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
    
}