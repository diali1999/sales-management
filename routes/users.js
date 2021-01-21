const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.render('index', {title: 'Sales Representatives'});
});

router.get('/add', (req, res, next) => {
  res.render('index', {title: 'Add Sales Representatives'});
});

router.get('/user/:id', (req, res, next) => {
  res.render('index', {title: 'Sales Rep.'});
});
module.exports = router;
