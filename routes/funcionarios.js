var express = require('express');
const db = require('../utils/db');
var router = express.Router();

router.get('/', function(req, res) {
  const cmd = `SELECT * FROM Funcionario`
  db.query(cmd, (error, result) => {
    if (error) throw error;
    res.render('funcionarios/listagem_funcionarios', { page: 'funcionarios', funcionarios: result });
  })
});

router.get('/cadastrar', function(req, res) {
  res.render('funcionarios/cadastrar_funcionario', { page: 'funcionarios' });
});

router.post('/cadastrar', function(req, res) {
  const { nome, cpf } = req.body;

  const cmd = `
  INSERT INTO Funcionario (nome, cpf)
  VALUES (?, ?)
  `

  db.query(cmd, [nome, cpf], (error) => {
    if (error) throw error;
    res.redirect('/funcionarios');
  })
});

router.get('/:id', function(req, res) {
  const cmd = `SELECT *, COUNT(codigoFuncionario) as vendas FROM Funcionario WHERE id = ${req.params.id} INNER JOIN Venda ON Funcionario.codigo = Venda.codigoFuncionario`
  db.query(cmd, (error, result) => {
    if (error) throw error;
    res.render('funcionarios/visualizar_funcionario', { title: "Vitor Daniel", page: 'funcionarios', funcionario: result });
  })
});

router.post('/deletar', function(req, res) {
  const cmd = `DELETE FROM Funcionario WHERE id = ${req.body.id}`
  db.query(cmd, (error) => {
    if (error) throw error;
    res.redirect('/funcionarios');
  })
});

router.get('/:id/cadastrar_dependente', function(req, res) {
  res.render('funcionarios/cadastrar_dependente', { page: 'funcionarios' });
});

module.exports = router;
