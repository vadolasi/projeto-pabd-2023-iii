var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressLayouts = require('express-ejs-layouts');
const moment = require('moment');
moment.locale('pt-br');

var indexRouter = require('./routes/index');
var clientesRouter = require('./routes/clientes');
var comprasRouter = require('./routes/compras');
var fornrcedoresRouter = require('./routes/fornecedores');
var funcionariosRouter = require('./routes/funcionarios');
var ingredientesRouter = require('./routes/ingredientes');
var produtosRouter = require('./routes/produtos');
var vendasRouter = require('./routes/vendas');

var app = express();

app.use((req, res, next)=>{
  res.locals.moment = moment;
  next();
});

app.set('layout', 'layouts/default')
app.set("layout extractScripts", true)
app.use(expressLayouts);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/clientes', clientesRouter);
app.use('/compras', comprasRouter);
app.use('/fornecedores', fornrcedoresRouter);
app.use('/funcionarios', funcionariosRouter);
app.use('/ingredientes', ingredientesRouter);
app.use('/produtos', produtosRouter);
app.use('/vendas', vendasRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
