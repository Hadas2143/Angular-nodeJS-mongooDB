export interface ingredient{
    name:String,
    amount:Number
}
export interface recipeInterface{
    _id:String,
    recipyName:String,
    image:String,
    level:String,
    time:Number,
    type:String,
    userCode:String,
    ingredients:ingredient[]
}