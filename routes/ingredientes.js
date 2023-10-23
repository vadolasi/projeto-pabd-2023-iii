var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('ingredientes', { title: 'Matérias primas', page: 'ingredientes' });
});

router.get('/:id', function(req, res, next) {
    res.render('ingrediente', { title: 'Aloe Vera', page: 'ingredientes' });
});

module.exports = router;
