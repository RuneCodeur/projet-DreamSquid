const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:"mysql-dreamsquid.alwaysdata.net",
    user:"254902",
    password:"oblivion-666",
    database:"dreamsquid_rackham",
});

module.exports = connection;