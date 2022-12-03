const {profile}=require('../Controllers/profile')
const express=require("express")
const router=express.Router()
const protected=require("../middlewares/auth")
router.route('/profile').get(protected,profile)

module.exports=router