var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('funcionarios', { title: 'Funcionários', page: 'funcionarios' });
});

router.get('/:id', function(req, res, next) {
    res.render('funcionario', { title: 'Vitor Daniel', page: 'funcionarios' });
  });
  

module.exports = router;
