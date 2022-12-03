const Post=require("../Models/post")
const { BadRequestError, NotFoundError }=require("../errors")
const { StatusCodes }=require("http-status-codes")

const getAllPosts=async(req,res)=>{
   
    const post=await Post.find({ })
    .populate({path:'createdBy',select:['username','image']})
    .sort('createdAt')


    res.status(StatusCodes.OK).json(post)

   


}
const getPost=async(req,res)=>{
    const {
        
        params: { id: postId },
      } = req
    
      const post = await Post.findOne({
        _id: postId,
       
      }).populate({path:'createdBy',select:['username','image']})
      if (!post) {
        throw new NotFoundError(`No job with id ${postId}`)
      }
      res.status(StatusCodes.OK).json(post)
    }


const createPost=async(req,res)=>{
    req.body.createdBy = req.user.userId
   
    const post=await Post.create(req.body)
    res.status(StatusCodes.CREATED).json({post})

}
const updatePost=async(req,res)=>{
  const {
    body: { tags,title,description},
    user: { userId },
    params: { id: postId },
  } = req

  if (tags === '' || title === '' || description===''  ) {
    throw new BadRequestError('tags,title,description fields cannot be empty')
  }
  const post = await Post.findByIdAndUpdate(
    { _id: postId, createdBy: userId },
    req.body,
    { new: true, runValidators: true }
  )
  if (!post) {
    throw new NotFoundError(`No job with id ${postId}`)
  }
  res.status(StatusCodes.OK).json(post)

}
const deletePost= async(req,res)=>{
  const {
    user: { userId },
    params: { id: postId },
  } = req

  const post = await Post.findByIdAndRemove({
    _id: postId,
    createdBy: userId,
  })
  if (!post) {
    throw new NotFoundError(`No post with id ${postId}`)
  }
  res.status(StatusCodes.OK).send("Post is Deleted successfully")

}


module.exports={getAllPosts,getPost,updatePost,deletePost,createPost}