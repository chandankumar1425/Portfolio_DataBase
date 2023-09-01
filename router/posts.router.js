const express=require("express")
const {PostsModel}=require("../model/posts.model")
const postsRouter=express.Router()

postsRouter.get("/allcontact",async (req,res)=>{
  try{
      const users= await PostsModel.find()
      res.status(200).send(users)
  }catch(error){
      res.status(400).send({"msg":error.message})
  }  
})
//add
postsRouter.post("/add", async (req, res) => {
    const payload = req.body;
    try {
      const posts = new PostsModel(payload);
      // await posts.save()
      res.status(200).send(await posts.save());
    } catch (err) {
      res.status(400).send({ msg: "Post is not created", err: err.message });
      
    }
  });
module.exports={postsRouter}