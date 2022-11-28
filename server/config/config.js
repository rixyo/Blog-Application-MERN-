module.exports={
    MONGO_IP:process.env.MONGO_IP || "mongoDB",
    MONGO_PORT: process.env.MONGO_PORT||27017,
    MONGO_USER: process.env.MONGO_ROOT_USERNAME,
    MONGO_PASSWORD:  process.env.MONGO_ROOT_PASSWORD,
    DB_Name: process.env.DB_NAME


}
