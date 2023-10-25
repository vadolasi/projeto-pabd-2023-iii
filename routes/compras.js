var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('compras/listagem_compras', { page: 'compras' });
});

router.get('/cadastrar', function(req, res, next) {
    res.render('compras/cadastrar_compra', { page: 'compras' });
});
  
module.exports = router;
