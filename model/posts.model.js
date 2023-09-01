const mongoose=require("mongoose")

const postsSchema= mongoose.Schema({
    name : String,
    email : String,
    number : Number,
    message : String  
},
{ versionKey: false })

const PostsModel=mongoose.model("contact", postsSchema)


module.exports={PostsModel}