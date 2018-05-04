var express = require('express');
var router = express.Router();






// ************* ROUTES ********************

// TODO query database for blogs and display them in boxes
router.get('/', function (req, res) {
    res.render('home')
});

router.get('/contact', function (req, res) {
    res.render('contact')
});

// TODO send data from form to database
// router.post('/note', urlencodedParser, function (req, res) {

// 	let info = req.body
//     var name = info.name,
//         email = info.email,
//         message = info.content;


//     console.log(info)

//     // connection.query('SELECT * FROM contact', function (error, results, fields) {
//     //     if (error)throw error;
//     //     console.log(results)
//     // });
//     // connection.end();

//     res.redirect('/');
// });

// **********************************



module.exports = router;
