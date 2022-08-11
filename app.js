const express=require("express");
const app=express();
const path = require('path');
const port=8000;

app.set("view engine","ejs");
app.set('views', path.join(__dirname, 'views')); 

app.use("/public", express.static("static"))

var aaa=["보기1","보기2","보기2","보기4","보기5"]


app.get("/",(req,res)=>{
    res.render("test",{menu:aaa});
})

app.get("/test1",(req,res)=>{
    res.render("test1");
})

app.get("/test3",(req,res)=>{
    res.render("test3")
})

app.listen(port,()=>{
    console.log("server open: ",port);
})