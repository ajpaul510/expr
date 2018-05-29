let express = require('express');
let router = express.Router();


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
        // db.insert
        res.redirect('/')

    }

});



module.exports = router;
