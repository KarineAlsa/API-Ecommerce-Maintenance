import { Product } from "../../Domain/Entity/Product";
import ProductInterface  from "../../Domain/Port/ProductInterface";
import query from "../../../Database/mysql";

export default class ProductMySQLRepository implements ProductInterface {
    async createProduct(product: Product): Promise<any> {
        const sql = "INSERT INTO products (name, price,description,cathegory,brand, provider_id) VALUES (?,?,?,?,?,?)";
        
        const params: any[] = [product.name, product.price,product.description,product.cathegory,product.brand,product.provider_id];
        try {
            const [result]: any = await query(sql, params);

            if (result) {
                result.id = result.insertId
                return product

            } else {
                return false
            }
        }
        catch (error) {
            return false
        }
    }
    async searchProduct(id: string): Promise<any> {
        const sql = "SELECT * FROM products WHERE id = ?";
        const params: any[] = [id];
        try {
            const [[result]]: any = await query(sql, params);
            
            if (result){
                return {id:result.id,name:result.name, price: result.price, description:result.description, cathegory:result.cathegory,brand: result.brand, provider_id: result.provider_id};
            }
            else {
                return false;
            }
        }catch (error) {
            return false;
        }
    }
    async deleteProduct(id: string): Promise<any> {
        const sql = "DELETE FROM products WHERE id = ?";
        const params: any[] = [id];
        try {
            const [result]: any = await query(sql, params);
            console.log(result);
            return result
        }

        catch (error) {
            return false
        }
    }
    async listAllProducts(): Promise<any> {
        const sql = "SELECT * FROM products";
        const params: any[] = [];
        try {
            const [result]: any = await query(sql, params);
            
        if (result.length>0){
            return result
        }
        else {
            return "No hay productos";
        }
        }
        catch (error) {
            return false;
        }
    }
    async updateProduct(id: string, updateFields: any): Promise<any> {
        let updateQuery = "UPDATE products SET ";
        const params: any[] = [];
        Object.entries(updateFields).forEach(([key, value]) => {
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
                return false
            }
        } catch (error) {
            return false
        }
    }
    async searchProductsByBrand(brand: string): Promise<any> {
        const sql = "SELECT * FROM products WHERE brand = ?";
        const params: any[] = [brand];
        try {
            const [result]: any = await query(sql, params);
            
            if (result.length>0){
                return result
            }
            else {
                return false;
            }
        }catch (error) {
            return false;
        }
    }
    async searchProductsByCathegory(cathegory: string): Promise<any> {
        const sql = "SELECT * FROM products WHERE cathegory = ?";
        const params: any[] = [cathegory];
        try {
          const [result]: any = await query(sql, params);
              
          if (result.length>0){
            return result
          }
          else {
            return false;
          }
        }catch (error) {
            return false;
          }
    }
}