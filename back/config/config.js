import { configDotenv } from "dotenv";
import mongoose, { mongo } from "mongoose"

configDotenv()
export const connectDb = async () => {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("db ya baglandi");
    
    
}