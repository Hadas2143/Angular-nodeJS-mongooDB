import { Router } from "express";
import recipeController from "../controllers/recipeController.js";
import bodyParser from "body-parser";

const recipeRout=Router()
recipeRout.use(bodyParser.json())
recipeRout.get('/getAllRecipe',recipeController.getAllRecipe)
recipeRout.get('/getRecipeById/:id',recipeController.getRecipeById)
recipeRout.put('/addOrUpdateRecipe', recipeController.postAndUpdate);
recipeRout.delete('/deleteRecipe/:userPassword/:recipeId', recipeController.deleteRecipe);

export default recipeRout