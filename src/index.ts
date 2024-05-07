import express ,{Express,Request,Response}from "express"
const app:Express =express()
app.get("/",(req:Request,res:Response)=>
{


  
  res.send("app worling")
})
app.listen(3000,()=>{
console.log("listening on 3000");
}





























)