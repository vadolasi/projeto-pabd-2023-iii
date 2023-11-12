const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'captain.infrashub.vitordaniel.com',
    user: 'root',
    password: 'asdf1234',
    port: 1004,
    database: 'dbmaquiagem',
    multipleStatements: true
});

db.connect((erro) => {
    if (erro){
        throw erro;
    }

    console.log('Conectado ao BD...');
});


global.db = db;

module.exports = db;
