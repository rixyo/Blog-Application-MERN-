const express=require("express")
const {createComment,getAllComments,deleteComment}=require("../Controllers/comment")
const protected=require("../middlewares/auth")
const router=express.Router()

router.route('/').post(protected,createComment)
router.route('/:id').get(protected,getAllComments).delete(protected,deleteComment)
module.exports=router