const express=require('express');
const http=require('http')

const app=express();
app.use((req,res,next)=>{
  return "hello";
});
const server=http.createServer(app)

const port=process.env.PORT||5000;

server.listen(port,()=>{
  console.log("server running");
})
