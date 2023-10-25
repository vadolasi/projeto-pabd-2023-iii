var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('fornecedores/listagem_fornecedores', { page: 'fornecedores' });
});

router.get('/cadastrar', function(req, res, next) {
    res.render('fornecedores/cadastrar_fornecedor', { page: 'fornecedores' });
});

module.exports = router;
