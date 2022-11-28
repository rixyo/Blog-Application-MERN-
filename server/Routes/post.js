const express=require("express")
const {getAllPosts,getPost,updatePost,deletePost,createPost}=require("../Controllers/post")
const router=express.Router()

router.route('/').post(createPost).get(getAllPosts)
router.route('/:id').get(getPost).delete(deletePost).patch(updatePost)

module.exports=router