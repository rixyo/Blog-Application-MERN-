
const protected=require("../middlewares/auth")
const {login,register,profile}=require("../Controllers/auth")
const express=require("express")
const router=express.Router()



router.post('/register',register)
router.post('/login',login)
router.route('/profile').get(protected,profile)


module.exports=router