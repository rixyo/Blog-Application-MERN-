
const {StatusCodes}=require('http-status-codes')
const {BadRequestError, UnauthenticatedError}=require('../errors')
var uniqid = require('uniqid');

const User = require("../Models/user")


const register=async(req,res)=>{
    
   
    const user=await User.create({...req.body,tag:uniqid.time()})
    const token=user.createJwt()
    
    res.status(StatusCodes.CREATED).json({ name: user.knickName,image:user.image,tag:user.tag,github:user.github,token})
}
const login=async(req,res)=>{
   const{email,password}=req.body
   if(!email||!password){
    throw new BadRequestError("please provide a valid email address and password")
   }
  const user=await User.findOne({email})
 
  if(!user){
    throw new UnauthenticatedError("Invalid Credentials")

  }
   
   const isPasswordCorrect=await user.comparePassword(password)
   if(!isPasswordCorrect){
    throw new UnauthenticatedError("Invalid Credentials")

  }
  const token=user.createJwt()
  res.status(StatusCodes.OK).json( { email:user.email, name:user.knickName,token})
}


module.exports={register,login}