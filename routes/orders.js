const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', {title: 'Orders'});
});

router.get('/add', (req, res, next) => {
    res.render('index', {title: 'Add Orders'});
});

router.get('order/:id', (req, res, next) => {
    res.render('index', {title: 'Order'});
})

module.exports = router;