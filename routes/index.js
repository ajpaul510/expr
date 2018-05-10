var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
    res.render('home')
});

router.get('/contact', function (req, res) {
    res.render('contact')
});


// router.post('/note', urlencodedParser, function (req, res) {


// });

// **********************************



module.exports = router;
