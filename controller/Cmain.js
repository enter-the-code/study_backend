const Assign = require("../model/Assign");
exports.main = (req, res) => {
    res.render("Assign");
}
exports.login=(req,res)=>{
    res.render("Login");
}
exports.main_p=(req,res)=>{
    res.render("main_p");
}
exports.Assign = (req, res) => {
    Assign.Assign(req.body, function (result) {
        res.send(data);
    })
}
exports.Login_try=(req,res)=>{
    console.log(req.body)
    let isLogin=false;
    Assign.Login(req.body, function (result) {
        if(result.length==0){
            isLogin=false;
        }
        else{
            isLogin=true;
        }
        res.send(isLogin);
    })
}

exports.check_mod=(req,res)=>{
    Assign.check(req.body,function(result){
        let isok=false;
        if(result.length==0){
            isok=false;
        }
        else{
            isok=true;
        }
        res.send(isok);
    })
}

exports.modify_try=(req,res)=>{
    console.log(req.body)
    let isLogin=false;
    Assign.modify(req.body, function (result) {
        //console.log(result[0])
        if(result.affectedRows==0){
            isLogin=false;
        }
        else{
            isLogin=true;
        }
        res.send(isLogin);
    })
}

exports.Del=(req,res)=>{
    console.log(req.body)
    let isLogin=false;
    Assign.Del(req.body, function (result) {
        var data = {
            id_found:req.body.found
        }
        //console.log(result[0])
        if(result.affectedRows==0){
            isLogin=false;
        }
        else{
            isLogin=true;
        }
        res.send(isLogin);
    })
}