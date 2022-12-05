const express=require("express")
const {createReplay,getAllReplay,deleteReplay}=require("../Controllers/replay")
const protected=require("../middlewares/auth")
const router=express.Router()

router.route('/').post(protected,createReplay)
router.route('/:id').get(protected,getAllReplay).delete(protected,deleteReplay)
module.exports=router