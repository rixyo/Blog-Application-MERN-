const Comment =require('../Models/comment')
const { BadRequestError, NotFoundError }=require("../errors")
const { StatusCodes }=require("http-status-codes")


const getAllComments = async (req, res) => {
    const comment = await Comment.find({postId: req.params.id}).sort('createdAt').populate({path:'commentBy',select:['username','image']}).sort('createdAt')
    res.status(StatusCodes.OK).json({ comment, count: comment.length })
  }
const createComment = async (req, res) => {
    req.body.commentBy = req.user.userId
  
    const comment = await Comment.create(req.body)
    res.status(StatusCodes.CREATED).json({ comment })
  }
  const deleteComment= async(req,res)=>{
    const {
      user: { userId },
      params: { id: commentId },
    } = req
  
    const comment = await Comment.findByIdAndRemove({
      _id: commentId,
      commentBy: userId,
    })
    if (!comment) {
      throw new NotFoundError(`No commentt with id ${commentId}`)
    }
    res.status(StatusCodes.OK).send("Comment is Deleted successfully")
  
  }



  module.exports={createComment,getAllComments,deleteComment}