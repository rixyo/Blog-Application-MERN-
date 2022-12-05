const mongoose  = require("mongoose")

const commentSchema=new mongoose.Schema({
    commentBy:{
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user'],

    },
   
    postId: {
        type: String,
        required: true,
    },
  
    comments: {
        type: String,
        required: true
    }
},{ timestamps: true })
module.exports=mongoose.model('Comment',commentSchema)