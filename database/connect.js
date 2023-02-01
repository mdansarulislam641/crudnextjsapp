const { default: mongoose } = require("mongoose");

const MONGO_URL = `mongodb+srv://nextjscrudapp:7cH1LWUSlhT1KhOu@nexrjs.lpjxsqw.mongodb.net/employeeapp`;

const connectMongoDb =async () =>{
    try {
        const {connection} = await mongoose.connect(MONGO_URL)
        if(connection.readyState == 1){
            console.log("Database Connected");
        }
    } catch (error) {
        return Promise.reject(error)
    }
}
export default connectMongoDb ;