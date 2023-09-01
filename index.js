const express=require("express")
const cors=require("cors")
const {connection}=require("./db")
const {postsRouter}=require("./router/posts.router")
const app=express()
app.use(express.json())
app.use(cors())
app.get("/", (req,res) => {
    res.send("Welcome to Home Page");
})
app.use("/post",postsRouter)
app.listen(4444,async(res,err)=>{
    try{
        await connection  
        console.log("connected to datbase");
    }catch(err){
        console.log(err);
    }
    console.log("Server is running at port no 4444")
})
