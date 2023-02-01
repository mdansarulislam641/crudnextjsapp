const { Schema, models, model } = require("mongoose");

const userSchema = new Schema({
    name : String ,
    avatar : String ,
    salary : Number ,
    date : String , 
    status : String,
    email : String
});
const userModels = models.users || model('users', userSchema);
export default userModels ;