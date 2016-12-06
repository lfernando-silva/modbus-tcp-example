var express = require('express');
var router = express.Router();
var ModbusHandler = require('../handlers/ModbusHandler.js');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.post('/send', function (req, res){
    var n = Math.floor(Math.random() * 100) + 1 

    var resp = ModbusHandler.send(n);
    return res.render('index', Boolean(resp));
})

module.exports = router;