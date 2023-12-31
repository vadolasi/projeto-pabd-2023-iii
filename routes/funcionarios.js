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
  const cmd = `
  SELECT *, Funcionario.codigo, COUNT(codigoFuncionario) as vendas
  FROM Funcionario
  INNER JOIN Venda
    ON Funcionario.codigo = Venda.codigoFuncionario
  WHERE Funcionario.codigo = ?
  `
  db.query(cmd, [req.params.id], (error, result) => {
    if (error) throw error;
    res.render('funcionarios/visualizar_funcionario', { title: result[0].nome, page: 'funcionarios', funcionario: result[0] });
  })
});

router.get('/:id/editar', function(req, res) {
  const cmd = `
  SELECT codigo, cpf, nome
  FROM Funcionario
  WHERE Funcionario.codigo = ?
  `

  db.query(cmd, [req.params.id], (error, result) => {
    if (error) throw error;
    res.render('funcionarios/editar_funcionario', { title: `${result[0].nome} - Editar`, page: 'funcionarios', funcionario: result[0] });
  })
});

router.post('/:id/editar', function(req, res) {
  const cmd = `
  UPDATE Funcionario
  SET nome = ?, cpf = ?
  WHERE Funcionario.codigo = ?
  `

  db.query(cmd, [req.body.nome, req.body.cpf, req.params.id], (error, result) => {
    if (error) throw error;
    res.redirect(`/funcionarios/${req.params.id}`)
  })
});


router.post('/deletar', function(req, res) {
  const cmd = `DELETE FROM Funcionario WHERE codigo = ?`
  db.query(cmd, [req.body.codigo], (error) => {
    if (error) throw error;
    res.redirect('/funcionarios');
  })
});

router.get('/:id/cadastrar_dependente', function(req, res) {
  res.render('funcionarios/cadastrar_dependente', { page: 'funcionarios' });
});

module.exports = router;
