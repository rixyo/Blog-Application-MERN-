const Post=require("../Models/post")
const User=require("../Models/user")
const { StatusCodes }=require("http-status-codes")
const profile=async(req,res)=>{
    const post = await Post.find({ createdBy: req.user.userId }).sort('createdAt').populate({path:'createdBy',select:['username','image','tag']})
    res.status(StatusCodes.OK).json( post )
  
  }
  


  module.exports={profile}