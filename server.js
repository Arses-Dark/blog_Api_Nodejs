require('dotenv').config({
    path:'./config/config.env'
})
const morgan=require('morgan')

const express=require('express')
const connectDB=require('./db/dbConnect')

connectDB()


const app=express()

app.use(express.json())
if(process.env.NODE_ENV=='development'){
    app.use(morgan('dev'))
}



class CommentController{
    async create(req,res){}
    async get(req,res){}
    async delete(req,res){}
    async update(req,res){}  
}
class CategoriesController{
    async create(req,res){}
    async get(req,res){}
    async delete(req,res){}
    async update(req,res){}  
}
app.get('/',(req,res)=>{
    res.send("Hello World")
})
const usersRoutes=require("./routes/users/usersRoutes")
app.use('/api/v1/users',usersRoutes)
const port=process.env.PORT || 5000
app.listen(3000)