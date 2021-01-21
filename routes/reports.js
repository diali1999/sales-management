const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {title: 'Working report'});
});

router.get('/add', function(req, res, next){
    res.render('index', {title: 'Add report'});
});

router.get('/report/:id', function(req, res, next){
    res.render('index', {title: 'Report'});
});
module.exports = router;