import { Router } from "express";
import userController from "../controllers/userController.js";
import bodyParser from "body-parser";
import userMiddleware from "../middleware/userMiddleware.js";

const userRout=Router()
userRout.use(bodyParser.json())
userRout.get('/getAllUsers',userController.getAllUser)
userRout.post('/addUser',userMiddleware.writeInTextNewUser,userController.addUser)
userRout.get('/getUserByIdAndName/:pass/:name',userController.getUserByIdAndName)
userRout.get('/getAllFavoriteRrcipe/:_id',userController.getAllFavoriteRrcipe)
userRout.put('/addToFavoriteRrcipe/:_id/:recipeId',userController.addToFavoriteRecipes)

export default userRout