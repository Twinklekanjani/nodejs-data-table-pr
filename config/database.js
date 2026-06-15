import mongoose from "mongoose";

const db = async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/student');
        console.log("database connected");
    }catch(error){
        console.log(error.message);
    }
}

export default db();