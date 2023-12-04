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
  const cmd = `SELECT * FROM Funcionario WHERE id = ${req.params.id}`
  db.query(cmd, (error, result) => {
    if (error) throw error;
    res.render('funcionarios/visualizar_funcionario', { title: "Vitor Daniel", page: 'funcionarios', funcionario: result });
  })
});

router.get('/:id/cadastrar_dependente', function(req, res) {
  res.render('funcionarios/cadastrar_dependente', { page: 'funcionarios' });
});

module.exports = router;
