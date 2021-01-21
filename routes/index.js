const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Sales Management' });
});

router.get('/login', (req, res, next) => {
  res.render('index', {title: 'Login'});
});

router.get('/dashboard', (req, res, next) => {
  res.render('index', {title: 'Dashboard'});
});

module.exports = router;
