require('dotenv').config({
    path:'./config/config.env'
})

const express=require('express')
const dbConnect=require('./config/dbConnect')
dbConnect()

const app=express()

app.get('/',(req,res)=>
{
    res.send("hello Worlds")
})

const port=process.env.PORT || 5000
app.listen(3000)