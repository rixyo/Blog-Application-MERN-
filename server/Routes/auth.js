
const protected=require("../middlewares/auth")
const {login,register,profile,UserInfo}=require("../Controllers/auth")
const express=require("express")
const router=express.Router()



router.post('/register',register)
router.post('/login',login)
router.route('/profile').get(protected,profile)
router.route('/info').get(protected,UserInfo)


module.exports=router