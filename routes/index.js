let express = require('express');
let router = express.Router();
let database = require('../models/user.js');

router.get('/', function (req, res) {
    res.render('home')
});

router.get('/contact', function (req, res) {
    res.render('contact')
});


router.post('/contact', function (req, res) {

    let user_info = req.body;

    req.checkBody('name', 'First name is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('content', 'Message is required').notEmpty();

    let errors = req.validationErrors();

    if (errors) {
        res.render('contact', {
            errors: errors
        });
    }
    else{
        database.insert_message(user_info, function (err) {
            if (err) throw err;
            res.redirect('/')
        });
    }
});

router.get('/about', function (req, res) {

    res.render('about');
});

router.get('/experience', function (req, res) {

});

router.get('*', function(req, res){
  res.render('404')
});
module.exports = router;
