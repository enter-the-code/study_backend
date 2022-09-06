const Visitor = require("../model/visitor");

exports.visitor = (req, res) => {
    Visitor.get_visitor((result) => {
        console.log(result);
        res.render("visitor", { data: result });
    })

}

exports.post_visitor = (req, res) => {
    console.log(req.body)
    Visitor.post_visitor(req.body, function(result){
        var data = {
            id: result,
            name: req.body.name,
            comment: req.body.comment
        }
        res.send(data);
    })
}

exports.remove_visitor = (req, res) => {
    console.log(req.body);
    Visitor.remove_visitor(req.body, function(result){
        res.send(result);
    })
}
exports.modify_visitor = (req, res) => {
    console.log(req.body);
    Visitor._visitor(req.body, function(result){
        res.send(result);
    })
}