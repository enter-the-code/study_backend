var express=require("express");
var controller=require("../controller/Cmain");
const router=express.Router();

router.get("/",controller.main);
router.get("/Login",controller.login);
router.get("/main_p",controller.main_p);
router.post("/post/Login",controller.Login_try);
router.post("/post/modify",controller.modify_try);
router.post("/post/del",controller.Del);
router.post("/post/check",controller.check_mod);
router.post("/post/axios",controller.Assign);
var controllerv=require("../controller/Cvisitor");
router.get("/visitor",controllerv.visitor)
router.post("/visitor/post",controllerv.post_visitor);
router.post("/visitor/post/delete",controllerv.remove_visitor);
router.post("/visitor/post/modify",controllerv.modify_visitor);
module.exports=router;