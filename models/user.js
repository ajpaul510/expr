// // ************** DB *************************
let mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ajaypal1',
    database: 'expr'
});


connection.connect(function(error){

    if (!!error) {
        console.log('ERROR now database called website found!');
    }else{
        console.log('Worked');
    }
});



function insert_message(info, callback){
    let sql = `INSERT INTO contact (name, email, message) VALUES ('${info.name}','${info.email}', '${info.content}' );`;
    connection.query(sql, function (err) {
        if (err) throw err;
        callback(false)
    })
}

module.exports.insert_message = insert_message;
