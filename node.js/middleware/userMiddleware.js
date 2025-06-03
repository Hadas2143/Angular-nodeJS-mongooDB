import fs from 'fs'
const userMiddleware={
    writeInTextNewUser:(req,res,next)=>{
        fs.appendFileSync('./listNewUsers.txt',"name:"+ req.body.name+ "password: "+ req.body.password+ " date: "+new Date()+"\n")
        next()
    }
}
export default userMiddleware