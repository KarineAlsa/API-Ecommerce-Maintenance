import { Provider } from "../../Domain/Entity/Provider";
import  ProviderInterface  from "../../Domain/Port/ProviderInterface";
import query from "../../../Database/mysql";

export default class ProviderMySQLRepository implements ProviderInterface {
    async createProvider(provider: Provider): Promise<any> {
        const sql = "INSERT INTO providers (company, cellphone) VALUES (?,?,?)";
        
        const params: any[] = [provider.company, provider.cellphone];
        try {
            const [result]: any = await query(sql, params);

            if (result) {
                provider.id = result.insertId
                return provider

            } else {
                return false
            }
        }
        catch (error) {
            return false
        }
    }
    async searchProvider(id: string): Promise<any> {
        const sql = "SELECT * FROM providers WHERE id = ?";
        const params: any[] = [id];
        try {
            const [[result]]: any = await query(sql, params);
            
            if (result){
                return {id:result.id,company:result.company,cellphone: result.cellphone};
            }
            else {
                return false;
            }
        }catch (error) {
            return false;
        }
    }
    async deleteProvider(id: string): Promise<any> {
        const sql = "DELETE FROM providers WHERE id = ?";
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
    async listAllProviders(): Promise<any> {
        const sql = "SELECT * FROM providers";
        const params: any[] = [];
        try {
            const [result]: any = await query(sql, params);
            
        if (result.length>0){
            return result
        }
        else {
            return "No hay proveedores";
        }
        }
        catch (error) {
            return false;
        }
    }

}