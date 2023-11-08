const User=require("../../models/User/userModel")
const bcrypt=require('bcryptjs')
const jwt=require("jsonwebtoken")
class UserController{
    async gets(req,res){}
    async register(req,res){
        const {firstname,lastname,email,password}=req.body
        const userFound=await User.findOne({email})
        if(userFound){
            return res.status(400).json({message:"User already exists"})

        }
        // hash password
        const salt=await bcrypt.genSalt(12)
        const hashPassword=await bcrypt.hash(password,salt)
        const user=User.create({
            firstname,
            lastname,
            email,
            password:hashPassword
        })
    }
    async login(req,res){
        const {email,password}=req.body
        const userFound=await User.findOne({email})
        const isMatched=await bcrypt.compare(password,userFound.password)
        console.log(isMatched)
        if(!userFound || !isMatched){
            return res.status(400).json({message:"Invalid credentials"})
        }
    }
    async profile(req,res){
        const {id}=req.params;
        const user = await User.findById(id);
        return res.status(200).json(user);
    }
    async delete(req,res){}
    async update(req,res){}  
}
module.exports=new UserController()