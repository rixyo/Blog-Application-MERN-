const mongoose  = require("mongoose")

const commentSchema=new mongoose.Schema({
    replayBy:{
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user'],

    },
   
    commentId: {
        type: String,
        required: true,
    },
  
    replays: {
        type: String,
        required: true
    }
},{ timestamps: true })
module.exports=mongoose.model('Replay',commentSchema)