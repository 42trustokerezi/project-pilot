import mongoose from "mongoose";

const dbConnect = async ()=>{
    try{
       await mongoose.connect(process.env.MONGO_URL)
       console.log("Database connection established")
    }catch(e){
        console.log(`Database connection error: ${e.message}`)
    }
}

export default dbConnect;