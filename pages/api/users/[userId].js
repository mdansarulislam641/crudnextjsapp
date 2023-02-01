import connectMongoDb from "@/database/connect";
import { deleteUser, getSingleUser, updateUser } from "../../../database/controller";

export default async function handler (req , res){
    connectMongoDb().catch(()=>res.status(405).json({error:"database connection error from userId"}));

    const {method} = req ;
    switch (method) {
        case "GET":
                getSingleUser(req , res)
            break;
        case "PUT":
           updateUser(req , res)
            break ;
        case "DELETE":
            deleteUser(req, res)
            break; 
    
        default:
            res.setHeader('Allow',['GET', 'PUT', 'DELETE']);
            res.status(404).end(`method ${method} not allow`);
            break;
    }
}