let expressValidator = require("express-validator");
let exphbs = require('express-handlebars');
let bodyParser = require('body-parser');
let routes = require('./routes/index');
let express = require('express');
let path = require('path');
let opn = require('opn');

let app = express(); // This whole app will be exported
module.exports = app;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// Use Public directory for static files
app.use(express.static(path.join(__dirname, 'public')));

// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// expressValidator
app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        let namespace = param.split(".")
            , root    = namespace.shift()
            , formParam = root;

        while(namespace.length) {
            formParam += "[" + namespace.shift() + "]";
        }
        return {
            param : formParam,
            msg   : msg,
            value : value
        };
    }
}));

app.use('/', routes);


// Error functions
app.use(function (req, res, next) {
  res.status(404).render('404')
});


app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!')
});


// opn('http://localhost:5000/');
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
