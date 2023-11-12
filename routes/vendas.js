var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  const cmd = `
  SELECT *, Funcionario.nome as funcionario, Comprador.nome as comprador FROM Venda
  INNER JOIN Funcionario
	  ON Venda.codigoFuncionario = Funcionario.codigo
  INNER JOIN Comprador
	  ON Venda.codigoComprador = Comprador.codigo;
  `
  db.query(cmd, (error, result) => {
    if (error) throw error;
    res.render('vendas/listagem_vendas', { page: 'vendas', vendas: result });
  })
});

router.get('/:id', function(req, res) {
  const cmd = `
  SELECT * FROM Venda
  INNER JOIN Comprador ON Venda.codigoComprador = Comprador.codigo
  INNER JOIN Funcionario ON Venda.codigoFuncionario = Funcionario.codigo
  WHERE Venda.id = ${req.params.id}
  `
  db.query(cmd, (error, result) => {
    if (error) throw error;
    res.render('vendas/visualizar_venda', { page: 'vendas', vendas: result, title: `Venda #${req.params.id}` });
  })
});

router.get('/cadastrar', function(req, res) {
    res.render('vendas/cadastrar_venda', { page: 'vendas' });
});

router.get('/:id/cadastrar_item', function(req, res) {
  res.render('vendas/cadastrar_item_vendido', { page: 'vendas' });
});
  

module.exports = router;
