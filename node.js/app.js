import express from "express";
import userRout from "./routes/userRout.js";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import recipeRout from "./routes/recipeRout.js";
import cors from 'cors'
import upload from "./uploadImg.js";

const app=express()
app.use(cors())
app.use('/users',userRout)
app.use('/recipes',recipeRout)
app.use(express.static("public"))
dotenv.config()

app.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file selected!' });
    }
    res.json({
        message: 'The file was uploaded successfully!',
        myFileName: req.file.filename 
    });
});


mongoose.connect('mongodb://0.0.0.0:27017/recipeProject2025')
.then(x=>
    console.log("CONECT!")
)
.catch(x=>
    console.log("NOT CONECT")
)

app.listen(process.env.PORT||3000,()=>{
    console.log("RUN")
})