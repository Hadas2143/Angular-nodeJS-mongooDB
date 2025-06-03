import userModel from "../model/userModel.js"
import recipeModel from "../model/recipeModel.js"

const userController = {
    getAllUser: (req, res) => {
        try {
            userModel.find()
                .then((data) => {
                    res.status(200).json(data)
                })
                .catch((error) => {
                    res.status(500).json(error.message)
                })
        }
        catch (error) {
            res.status(404).json(error.message)
        }
    },
    addUser: (req, res) => {
        try {
            const user = new userModel(req.body)
            user.save()
                .then((data) => {
                    console.log(data)
                    res.status(200).json(data)
                })
                .catch((e) => {
                    console.log(e);
                    
                    res.status(500).json(e.message)
                })
        }
        catch (e) {
            res.status(404).json(e.message)
        }
    },
    getUserByIdAndName: (req, res) => {
        const { pass, name } = req.params
        userModel.findOne({ password: pass, name: name })
            .then((data) => {
                if (data) {
                    res.status(200).json(data)
                    console.log(data);
                }
                else{
                    res.status(404).json('404 error')
                }
            })
            .catch((e) => {
                res.status(500).json(e.message)
            })
    },
    getAllFavoriteRrcipe: (req, res) => {
        const arrNames = []
        console.log("get");
        console.log(req.params._id);
        userModel.findById(req.params._id)
            .then(user => {
                if (!user)
                    return res.status(404).json('not founed!')
                console.log("i am in");
                return recipeModel.find(
                    { _id: { $in: user.favoriteRecipes } }, "recipyName"
                )
            }).then(x => {
                res.status(200).json(x)
            }).catch(e =>
                res.status(500).json("error!!!!!!!!")
            )
    },
    addToFavoriteRecipes: (req, res) => {
        console.log("add");
        userModel.findById(req.params._id)
            .then(user => {
                console.log(user);
                user.favoriteRecipes.push(req.params.recipeId)
                user.save()
                res.status(200).json(req.params.recipeId)
            })
            .catch(x =>
                res.status(404).json("user don't found")
            )
    }
}

export default userController