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

const router=require("./routes");
app.use("/",router);

app.listen(port,()=>{
console.log("server open:",port);
})