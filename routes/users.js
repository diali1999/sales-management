const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Sales Representatives'});
});

router.get('/add', function(req, res, next){
  res.render('index', {title: 'Add Sales Representatives'});
});

router.get('/user/:id', function(req, res, next){
  res.render('index', {title: 'Sales Rep.'});
});
module.exports = router;
