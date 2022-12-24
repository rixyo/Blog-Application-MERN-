
const {StatusCodes}=require('http-status-codes')
const {BadRequestError, UnauthenticatedError,NotFoundError}=require('../errors')
var uniqid = require('uniqid');

const User = require("../Models/user")
const Post=require("../Models/post")
const register=async(req,res)=>{
    
   
    const user=await User.create({...req.body,tag:uniqid.time()})
    const token=user.createJwt()
  
    res.status(StatusCodes.CREATED).json({ username: user.username,image:user.image,tag:user.tag,github:user.github,token})
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
  res.status(StatusCodes.OK).json({ id: user._id,image:user.image,tag:user.tag,github:user.github,name:user.username,bio:user.bio,token})
}

const profile = async (req, res) => {
 
    const posts = await Post.find({ createdBy: req.user.userId }).sort('createdAt')
    res.status(StatusCodes.OK).json({ posts })
  }
const UserInfo=async(req,res)=>{
  const users= await User.find({})
  res.status(StatusCodes.OK).json(users)

}


module.exports={register,login,profile,UserInfo}