import recipeModel from "../model/recipeModel.js"
import userModel from "../model/userModel.js"
// import mongoose from 'mongoose'
// const Types = mongoose;

const recipeController = {
    getAllRecipe: (req, res) => {
        recipeModel.find()
            .then((data) => {
                if (data) {
                    res.status(200).json(data)
                }
                else {
                    res.status(500).json(data)
                }
            })
            .catch((error) => {
                res.status(404).json(error.message)
            })
    },
    getRecipeById: (req, res) => {
        console.log("get: ", req.params.id);
        try {
            recipeModel.findOne({_id: req.params.id} )
                .then((data) => {
                    console.log("!!!!!!!!");
                    console.log(data);

                    return res.status(200).json(data)
                })
                .catch((error) => {
                    console.log("404");

                    return res.status(404).json(error.message)
                })
        }
        catch (error) {
            console.log("500");
            return res.status(500).json(error.message)
        }
    },
    postAndUpdate: (req, res) => {
        try {
            const recipeName = req.body.recipyName
            const userCode = req.body.userCode
            const update = req.body
            const options = {
                new: true,
                upsert: true
            }
            const recipe = recipeModel.findOneAndUpdate({ recipyName: recipeName, userCode }, update, options)
                .then(x => { res.status(200).json(x) })
                .catch(err => { res.status(500).json(err) })
        }
        catch (error) { res.status(500).json(error) }
    },
    addOrUpdateRecipe: (req, res) => {
        try {
            const myRecipeUpdate = req.body;
            const myRecipeId = myRecipeUpdate.recipyName
            recipeModel.findOneAndUpdate(
                { recipyName: myRecipeId },
                myRecipeUpdate,
                {
                    new: true,
                    upsert: true,
                }
            )
                .then(updatedRecipe => {
                    res.status(200).json(updatedRecipe);
                })
                .catch(error => {
                    res.status(500).json(error.message);
                });

        } catch (error) {
            res.status(500).json(error.message);
        }
    },
    deleteRecipe: (req, res) => {
        const { userPassword, recipeId } = req.params
        userModel.findById(userPassword)
            .then((user) => {
                if (!user)
                    return res.status(403).json('!user')
                recipeModel.findById(recipeId)
                    .then((recipe) => {
                        if (!recipe)
                            return res.status(402).json('!recipe')
                        const userPass = recipe.userCode
                        const isManager = user.isManager
                        if (userPass === user._id || isManager) {
                            recipeModel.findByIdAndDelete(recipeId)
                                .then(() =>
                                    res.status(200).json("Delete!!!")
                                )
                                .catch(e =>
                                    res.status(500).json(e.message)
                                )
                        } else {
                            return res.status(401).json("you can't delete")
                        }
                    })
                    .catch((e) =>
                        res.status(403).json(e.message)
                    )
            })
            .catch((e) => {
                res.status(404).json(e.message)
            })
    }
}
export default recipeController