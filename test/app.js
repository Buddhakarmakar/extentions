var express=require("express")

var app=express()

const path=require("path")
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname ,"event.html"))
})
app.get("/evenire",(req,res)=>{
    res.sendFile(path.join(__dirname ,"evenireWebsite.html"))
})




app.listen(3000,(err)=>{
    if(err) console.log(err)
    console.log("Server is running on ",3000)
})