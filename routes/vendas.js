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

router.get('/cadastrar', function(req, res) {
  const cmd1 = `
  SELECT * FROM Comprador;
  `

  const cmd2 = `
  SELECT * FROM Funcionario;
  `

  db.query(cmd1, (error, result1) => {
    if (error) throw error;
    db.query(cmd2, (error, result2) => {
      if (error) throw error;
      res.render('vendas/cadastrar_venda', { page: 'vendas', clientes: result1, funcionarios: result2 });
    })
  })
});

router.post('/cadastrar', function(req, res) {
  const { funcionario, cliente, data, valor, items } = req.body;

  const cmd = `
  INSERT INTO Venda (codigoFuncionario, codigoComprador, data, valor, items)
  VALUES (?, ?, ?, ?, ?)
  `

  db.query(cmd, [funcionario, cliente, data, valor, items], (error) => {
    if (error) throw error;
    res.redirect('/vendas');
  })
});

router.get('/:id', function(req, res) {
  const cmd = `
  SELECT * FROM Venda
  INNER JOIN Comprador ON Venda.codigoComprador = Comprador.codigo
  INNER JOIN Funcionario ON Venda.codigoFuncionario = Funcionario.codigo
  WHERE Venda.codigo = ${req.params.id}
  `
  db.query(cmd, (error, result) => {
    if (error) throw error;
    res.render('vendas/visualizar_venda', { page: 'vendas', vendas: result, title: `Venda #${req.params.id}` });
  })
});

router.get('/:id/cadastrar_item', function(req, res) {
  res.render('vendas/cadastrar_item_vendido', { page: 'vendas' });
});
  

module.exports = router;
