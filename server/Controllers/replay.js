const Replay =require('../Models/replay')
const {  NotFoundError }=require("../errors")
const { StatusCodes }=require("http-status-codes")


const getAllReplay = async (req, res) => {
    const replay = await Replay.find({commentId: req.params.id}).sort('createdAt').populate({path:'replayBy',select:['username','image']})
    res.status(StatusCodes.OK).json( replay )
  }
const createReplay = async (req, res) => {
    req.body.replayBy = req.user.userId
  
    const replay = await Replay.create(req.body)
    res.status(StatusCodes.CREATED).json({ replay })
  }
  const deleteReplay= async(req,res)=>{
    const {
      user: { userId },
      params: { id: replayId },
    } = req
  
    const replay = await Replay.findByIdAndRemove({
      _id: replayId,
      commentBy: userId,
    })
    if (!replay) {
      throw new NotFoundError(`No Replay with id ${replayId}`)
    }
    res.status(StatusCodes.OK).send("Replay is Deleted successfully")
  
  }



  module.exports={createReplay,getAllReplay,deleteReplay}