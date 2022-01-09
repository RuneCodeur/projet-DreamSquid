const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"oblivion",
    database:"dreamsquid",
});

module.exports = connection;