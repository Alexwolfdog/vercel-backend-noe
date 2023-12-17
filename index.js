const express=require('express');
const http=require('http')

const app=express();
app.use((req,res,next)=>{
  return res.status(100).json("hello");
});
const server=http.createServer(app)

const port=process.env.PORT||5000;

server.listen(process.env.PORT,()=>{
  console.log("server running");
})

module.export=server
