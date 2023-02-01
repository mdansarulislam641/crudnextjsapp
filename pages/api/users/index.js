import connectMongoDb from "@/database/connect";
import {deleteUser, getUsers, postUser, updateUser} from '../../../database/controller';
export default async function handler (req , res){
    connectMongoDb().catch(()=>res.status(400).json({error:"Connection error"}))
   const {method} = req ;
switch (method) {
    case "GET":
       getUsers(req, res);
        break;
    case "POST":
        postUser(req, res)
        break;
    case "PUT":
       updateUser(req , res)
        break ;
    case "DELETE":
        deleteUser(req, res)
        break;       

    default:
        res.setHeader("Allow", ['GET','POST', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${method} not allow`)
        break;
}

}