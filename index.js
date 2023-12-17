const express=require('express');
const http=require('http')

const app=express();
app.get("/",(req,res,next)=>{
  return "hello";
});
app.get('*', (req, res) => {
  // Optionally, you can log the request if needed
  console.log(`Ignoring request for: ${req.originalUrl}`);
  // Respond with a 404 status (or any other response as needed)
  res.status(404).send('Not Found');
});
const server=http.createServer(app)

const port=process.env.PORT||5000;

server.listen(port,()=>{
  console.log("server running");
})
