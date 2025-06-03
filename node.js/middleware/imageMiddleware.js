import fs from 'fs'
const imageMiddleware=(req,file,cb)=>{
    if(file.originalname.match(/\.(png.jpg)$/))
        cb(null,true)
    else
        cb(new Error('erroe file'))
}
export default imageMiddleware