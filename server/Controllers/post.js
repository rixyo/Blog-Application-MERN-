const Post=require("../Models/post")
const { BadRequestError, NotFoundError }=require("../errors")
const { StatusCodes }=require("http-status-codes")

const getAllPosts=async(req,res)=>{
    const post=await Post.find()
    res.status(StatusCodes.OK).json({post})

   


}
const getPost=(req,res)=>{

}
const createPost=async(req,res)=>{
   
    const post=await Post.create(req.body)
    res.status(StatusCodes.CREATED).json({post})

}
const updatePost=(req,res)=>{

}
const deletePost=(req,res)=>{

}

module.exports={getAllPosts,getPost,updatePost,deletePost,createPost}