var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('produtos', { title: 'Produtos', page: 'produtos' });
});

router.get('/:id', function(req, res, next) {
    res.render('produto', { title: 'Hidratante corporal', page: 'produtos' });
  });
  

module.exports = router;
