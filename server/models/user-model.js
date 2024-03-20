import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    username:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    }
})


const user = mongoose.model("user",userSchema)
export default user;
