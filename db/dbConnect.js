const mongoose=require('mongoose')

const connectDB=async()=>{
    const conn=await mongoose.connect(process.env.DATABASE_LOCAL,{
    })
    console.log(`MongoDB connected : ${conn.connection.host}`)
}
module.exports=connectDB