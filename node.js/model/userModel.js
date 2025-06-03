import mongoose from "mongoose"

const userModel=mongoose.Schema({
    _id:{
        // type:mongoose.Schema.ObjectId,
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:false
    },
    phone:{
        type:String,
        required:false
    },
    isManager:{
        type:Boolean,
        required:true
    }
    ,
    favoriteRecipes:{
        type:[String],//[mongoose.Schema.ObjectId],
        required:false,
        default:[]
    }
})
export default mongoose.model("userCollection", userModel)