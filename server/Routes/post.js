const express=require("express")
const {getAllPosts,getPost,updatePost,deletePost,createPost}=require("../Controllers/post")
const protected=require("../middlewares/auth")
const router=express.Router()

router.route('/').post(protected,createPost).get(getAllPosts)
router.route('/:id').get(protected,getPost).delete(protected,deletePost).patch(protected,updatePost)

module.exports=router