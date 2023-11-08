const jwt=require('jsonwebtoken')

const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_Secret,{expiresIn:process.env.JWT_TIMELIFE})
}