import userModels from '../models/userModel';

// GET : http://localhost:3000/api/users
export const getUsers = async(req , res)=>{
   try {
    const users =await userModels.find({});
    if(!users){
        return res.status(400).json({message:"Data not fount"})
    }
    res.status(200).json(users);
   } catch (error) {
        res.status(400).json({error:"Error while fetching data"});
   }
}

// GET Single user : http://localhost:3000/api/users/userId
export const getSingleUser = async(req , res)=>{
    try {
        const {userId} = req.query ;
        if(userId){
            const singleUser = await userModels.findById(userId)
            return res.status(200).json(singleUser)
        }
        res.status(404).json({error:"single user not find"})
    } catch (error) {
        res.status(404).json({error:"Error while fetching by id"})
    }
}

// POST : http://localhost:3000/api/users
export const postUser = async(req , res) =>{
    try {
        const formData = req.body ;
        if(!formData)return res.status(400).json({message:"Data is empty"});
        userModels.create(formData, (err , data)=>{
            res.status(200).json(data)
        })
    } catch (error) {
        res.status(400).json({error})
    }
}

// PUT : http://localhost:3000/api/users/userId
export const updateUser = async(req ,res) =>{
    try {
        const {userId} = req.query ;
        const formData = req.body ;
        if(userId && formData) {
            const user = await userModels.findByIdAndUpdate(userId,formData);
            res.status(200).json(user);
        }
        res.status(404).json({error:"Data not updated"});
    } catch (error) {
        res.status(404).json({error:"error while update data"});
    }
}

// DELETE : http://localhost:3000/api/users/userId
export const deleteUser = async (req ,res)=>{
    try {
        const {userId} = req.query ;
        console.log(userId)
        if(userId){
            const user = await userModels.findByIdAndDelete(userId);
            return res.status(200).json({id:userId});
        }
        res.status(404).json({error:"User not selected"});
    } catch (error) {
        res.status(404).json({error:"error while delete user"});
    }
}

