var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  const cmd = `SELECT * FROM Comprador`
  db.query(cmd, (error, result) => {
    if (error) throw error;
    res.render('clientes/listagem_clientes', { page: 'clientes', clientes: result });
  })
});

router.get('/cadastrar', function(req, res) {
  res.render('clientes/cadastrar_cliente', { page: 'clientes' });
});

module.exports = router;
