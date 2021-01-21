const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', {title: 'Working report'});
});

router.get('/add', (req, res, next) => {
    res.render('index', {title: 'Add report'});
});

router.get('/report/:id', (req, res, next) => {
    res.render('index', {title: 'Report'});
});
module.exports = router;