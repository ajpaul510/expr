
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var path = require('path');
var routes = require('./routes/index')
var app = express();

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));


app.set('view engine', 'handlebars');



// Use Public directory for static files
app.use(express.static(path.join(__dirname, 'public')))

// Bodyparser middleware
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use('/', routes);


// // ************** DB *************************

// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Ajaypal1',
//     database: 'website'
// });


// connection.connect(function(error){

//     if (!!error) {
//         console.log('ERROR now database called website found!');
//     }else{
//         console.log('Worked');
//     }
// });

// // ********************************************

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
