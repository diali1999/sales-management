const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sales Management' });
});

router.get('/login', function(req, res, next){
  res.render('index', {title: 'Login'});
});

router.get('/dashboard', function(req, res, next){
  res.render('index', {title: 'Dashboard'});
});
module.exports = router;
