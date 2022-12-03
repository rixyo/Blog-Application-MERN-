const express=require("express")
const cors=require("cors")
require("express-async-errors")
require("dotenv").config()
const app=express()
const connectDB=require("./DB/connect")
const notFoundMiddleware=require("./middlewares/not-found")
const errorHandlerMiddleware=require("./middlewares/error-handaler")
const {MONGO_IP, MONGO_PORT,MONGO_USER,MONGO_PASSWORD}=require("./config/config")
const postRoute=require("./Routes/post")
const authRoute=require("./Routes/auth")
require('events').EventEmitter.defaultMaxListeners = 15;
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('trust proxy',1)


app.use(cors())
app.get('/api/v1/test',(req,res)=>{
    res.send("<h1>Lonely Test Route</h1>")
})
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/posts',postRoute)

app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware)
const port=process.env.PORT||5000;


const Start=async()=>{
    try {
        
        await connectDB(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/${process.env.MONGO_DB_NAME}?authSource=admin`
          
        )
       
    app.listen(port,()=>console.log(`Server is running on port ${port}`))
        
    } catch (error) {
        console.log(error)
        setTimeout(Start,5000)
        
    }
    


}

Start()