var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('vendas/listagem_vendas', { page: 'vendas' });
});

router.get('/:id', function(req, res, next) {
  res.render('vendas/visualizar_venda', { title: "Venda #1", page: 'vendas' });
});

router.get('/cadastrar', function(req, res, next) {
    res.render('vendas/cadastrar_venda', { page: 'vendas' });
});

router.get('/:id/cadastrar_item', function(req, res, next) {
  res.render('vendas/cadastrar_item_vendido', { page: 'vendas' });
});
  

module.exports = router;
