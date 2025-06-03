import fs from 'fs'
import multer from 'multer'
import path from 'path'
import {fileURLToPath } from 'url'

const thisFileName=fileURLToPath(import.meta.url)
const __dirname=path.dirname(thisFileName)

const uploadImgDir=path.join(__dirname,'public/images')
if(!fs.existsSync(uploadImgDir)){
    fs.mkdirSync(uploadImgDir)
}

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,uploadImgDir)
    },
    filename:(req,file,cb)=>{
        const unique=Date.now()//*******diffrant from ruth******//
        cb(null,unique+' '+file.originalname)
    }
})

export const fileFilter=(req,file,cb)=>{
   if(file.originalname.match(/\.(png|jpg|jpeg|gif)$/i))
        cb(null,true)
    else
        cb(new Error('erroe file'))
}

const upload=multer({storage, fileFilter})
export default upload