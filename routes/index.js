var express = require('express');
var router = express.Router();

/* GET home page. */
router.get(
    '/',
    function (req, res, next)
    {
        res.render('index.html');
    }
);

router.get(
    '/redirect',
    function (req, res, next)
    {
        res.send("kek");
    }
);

module.exports = router;
