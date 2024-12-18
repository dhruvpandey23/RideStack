import { mongoose } from "mongoose";
import { DB_NAME } from '../constant.js'

const connectDB = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}${DB_NAME}`)
        console.log(`Database connected!!!.... , DB_Host:${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection failed",error)
        process.exit(1)
    }
   
}

console.log(process.env.MONGODB_URI)
 
export default connectDB
