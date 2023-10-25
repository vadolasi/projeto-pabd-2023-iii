var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('funcionarios/listagem_funcionarios', { page: 'funcionarios' });
});

router.get('/:id', function(req, res, next) {
  res.render('funcionarios/visualizar_funcionario', { title: "Vitor Daniel", page: 'funcionarios' });
});

router.get('/cadastrar', function(req, res, next) {
  res.render('funcionarios/cadastrar_funcionario', { page: 'funcionarios' });
});

router.get('/:id/cadastrar_dependente', function(req, res, next) {
  res.render('funcionarios/cadastrar_dependente', { page: 'funcionarios' });
});

module.exports = router;
