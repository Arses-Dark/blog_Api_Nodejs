require('dotenv').config({
    path:'./config/config.env'
})
const morgan=require('morgan')

const express=require('express')
const connectDB=require('./config/dbConnect')


const app=express()
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


app.get('/',(req,res)=>
{
    res.send("hello Worlds")
})

const port=process.env.PORT || 5000
app.listen(3000)