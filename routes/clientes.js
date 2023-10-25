var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('clientes/listagem_clientes', { page: 'clientes' });
});

router.get('/cadastrar', function(req, res, next) {
    res.render('clientes/cadastrar_cliente', { page: 'clientes' });
});

module.exports = router;
