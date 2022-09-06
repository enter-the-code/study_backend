const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "11111111",
    database: "test2",
    port: 3306
});

exports.Assign = (data, cb) => {
    console.log(data);
    var sql = `INSERT INTO user_Login(id, name, Pw) values('${data.id}','${data.name}', '${data.password}');`;
    cnn.query(sql, (err, row) => {
        if (err) throw err;
        console.log(row);
        cb(row);
    })
}
exports.Login = (data, cb) => {
    console.log(data);
    var sql = `select * from user_Login where id='${data.id}' and Pw='${data.password}'`;
    cnn.query(sql, (err, row) => {
        if (err) throw err;
        console.log(row);
        cb(row);
    })
}
exports.modify = (data, cb) => {
    console.log(data);
    var sql2 = `UPDATE user_Login SET id='${data.id}' , name='${data.name}' WHERE id='${data.id_found}';`;
            cnn.query(sql2, (err, row) => {
                if (err) throw err;
                console.log(row);
            })

}

exports.Del = (data, cb) => {
    console.log(data);
    var sql = `DELETE FROM user_Login WHERE id='${data.id_found}';`;
    cnn.query(sql, (err, row) => {
        if (err) throw err;
        console.log(row);
        cb(row);
    })

}

exports.check=(data,cb)=>{
    console.log(data);
    var sql = `select * from user_Login where id='${data.id_found}'`;
    cnn.query(sql, (err, row) => {
        if (err) throw err;
        console.log(row);
        cb(row);
    })
}