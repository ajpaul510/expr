var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var express = require('express');
var mysql = require('mysql');
var path = require('path');
var opn = require('opn');

var app = express();


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use('/', routes);

// Use Public directory for static files
app.use(express.static(path.join(__dirname, 'public')))

// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));


opn('http://localhost:5000/');
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
