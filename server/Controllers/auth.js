
const {StatusCodes}=require('http-status-codes')
const {BadRequestError, UnauthenticatedError}=require('../errors')
var uniqid = require('uniqid');

const User = require("../Models/user")


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
  res.status(StatusCodes.OK).json({ id: user._id,token})
}

const profile = async (req, res) => {

  const user = await User.findById(req.user._id);

  if (user) {
    user.username = req.body.username || user.username;
  
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.username,
      
    
      
      
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
}



module.exports={register,login,profile}