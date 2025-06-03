import mongoose from "mongoose";
import recipeValidators from '../validators/recipeValidators.js'

const ingredient = mongoose.Schema({
    // _id:{
    //     type:Number,
    //     required:true
    // },
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
})
const recipyModel = mongoose.Schema({
    _id: {
        type:String, //mongoose.Schema.ObjectId,
        required: true
        //add otomatic number
    },
    recipyName: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false,
    },
    level: {
        type: String,
        required: false,
        validate:{
            validator:(v)=>recipeValidators.checkLevel(v)
        }
    },
    time: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: false,
        validate:{
            validator:(t)=>recipeValidators.checkType(t)
        }
    },
    userCode: {
        type: String,
        required: true,
        ref: "userCollection"
    },
    ingredients: {
        type: [ingredient],
        required: true
    }
})
export default mongoose.model("recipeCollection", recipyModel)