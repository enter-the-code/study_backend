const express=require("express");
const multer=require("multer");
const path = require('path');
const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done){
            //console.log(req);
            done( null, 'static/img/');
        },
        filename(req, file, done) {
            console.log(req.body.ID);
            const ext = path.extname(file.originalname);
            done(null, req.body.ID + ext);
        },
    }),
    limits: { fileSize: 5*1024*1024 },
})
const app=express();
app.set("view engine", "ejs")
app.use("/static", express.static("static"))
app.use(express.urlencoded({extended:false}));
app.use(express.json())
const port=8000;

app.post("/upload",upload.single("userfile"),(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    res.send(req.file)
})

app.get("/",(req,res)=>{
    res.render("main");
})
app.get("/main",(req,res)=>{
    res.render("main2");
})
app.get("/upload",(req,res)=>{
    res.render("complete");
})
app.get("/personal",(req,res)=>{
    console.log(req.query);
    if(req.query.ID!=="asdasd" || req.query.password!=="1111"){
        res.send("똑바로 쳐라");
    }
    res.send("로그인 성공")
})
app.get("/inter",(req,res)=>{
    console.log(req.query);
    res.send(req.query)
})

app.listen(port,()=>{
    console.log("server open: ",port);
})