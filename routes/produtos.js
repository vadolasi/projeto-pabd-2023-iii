var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('produtos/listagem_produtos', { page: 'produtos' });
});

router.get('/cadastrar', function(req, res, next) {
  res.render('produtos/cadastrar_produto', { page: 'produtos' });
});

router.get('/:id', function(req, res, next) {
  res.render('produtos/visualizar_produto', { title: 'Hidratante corporal', page: 'produtos' });
});
  
module.exports = router;
