var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('ingredientes/listagem_ingredientes', { page: 'ingredientes' });
});

router.get('/:id', function(req, res, next) {
    res.render('ingredientes/visualizar_ingrediente', { title: 'Aloe Vera', page: 'ingredientes' });
});

module.exports = router;
