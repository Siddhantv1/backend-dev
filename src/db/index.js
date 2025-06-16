import mongoose from 'mongoose'
import {DB_NAME} from '../constants.js'

const connectDB = async () => {
    try{

        const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected mere bhai, DB HOST: ${connectioninstance.connection.host}`)
    }catch (error){
        console.log("MONGODB ka connection FAILED:", error);
        process.exit(1)
    }

}

export default connectDB
