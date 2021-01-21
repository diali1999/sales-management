const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next){
    res.render('index', {title: 'Orders'});
});

router.get('/add', function(req, res, next){
    res.render('index', {title: 'Add Orders'});
});

router.get('order/:id', function(req, res, next){
    res.render('index', {title: 'Order'});
})

module.exports = router;