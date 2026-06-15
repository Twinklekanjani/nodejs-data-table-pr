import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name:{type : String},
    email:{type : String},
    password:{type: String}
})

const Student = mongoose.model("studentData",studentSchema);

export default Student