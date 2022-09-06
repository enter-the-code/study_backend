const mysql=require("mysql");

const cnn=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"11111111",
    database:"test2",
    port:3306
});


exports.get_visitor=(cb)=>{
    var sql ="select * from visitor";
    cnn.query(sql,(err,row)=>{
        if(err) throw err;
        console.log(row);
        cb(row);
    })
}

exports.post_visitor = (data, cb) => {
    var sql = `INSERT INTO visitor(name, comment) values('${data.name}', '${data.comment}');`;
    cnn.query(sql, (err, result) => {
        if(err) throw err;
        console.log("visitors : ", result);
        cb(result.insertId);
    })
}

exports.remove_visitor = (data, cb) => {
    var sql = `DELETE FROM visitor WHERE id=${data.data};`;
    cnn.query(sql, (err, result) => {
        if(err) throw err;
        console.log("visitors : ", result);
        cb("success");
    })
}

exports.modify_visitor = (data, cb) => {
    var sql = `UPDATE visitor SET name='${data.data.name}' , comment='${data.data.comment}' WHERE id=${data.id};`;
    cnn.query(sql, (err, result) => {
        if(err) throw err;
        console.log("visitors : ", result);
        cb("success");
    })
}