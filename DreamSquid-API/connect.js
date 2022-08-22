const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:"mysql-dreamsquid.alwaysdata.net",
    user:"277274",
    password:"Oblivion-666",
    database:"dreamsquid_rackham",
});

module.exports = connection;