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

router.get('/:id', function(req, res) {
  const cmd = `SELECT * FROM Comprador WHERE codigo = ?`
  db.query(cmd, [req.params.id], (error, result) => {
    if (error) throw error;
    res.render('clientes/visualizar_cliente', { page: 'clientes', title: result[0].nome, cliente: result[0] });
  })
});

router.get('/:id/editar', function(req, res) {
  const cmd = `SELECT * FROM Comprador WHERE codigo = ?`
  db.query(cmd, [req.params.id], (error, result) => {
    if (error) throw error;
    res.render('clientes/editar_cliente', { page: 'clientes', cliente: result[0] });
  })
});

router.post('/:id/editar', function(req, res) {
  const cmd = `
  UPDATE Comprador
  SET nome = ?, cpf = ? 
  WHERE codigo = ?
  `

  db.query(cmd, [req.body.nome, req.body.cpf, req.params.id], (error, result) => {
    if (error) throw error;
    res.redirect(`/clientes/${req.params.id}`)
  })
});

router.post('/cadastrar', function(req, res) {
  const { nome, cpf } = req.body;

  const cmd = `
  INSERT INTO Comprador (nome, cpf)
  VALUES (?, ?)
  `

  db.query(cmd, [nome, cpf], (error) => {
    if (error) throw error;
    res.redirect('/clientes');
  })
});

router.post('/deletar', function(req, res) {
  const cmd = `DELETE FROM Comprador WHERE codigo = ?`
  db.query(cmd, [req.body.codigo], (error) => {
    if (error) throw error;
    res.redirect('/clientes');
  })
});

module.exports = router;
