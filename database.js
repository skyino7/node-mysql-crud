const mysql = require('mysql2/promise');

const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'classicmodels'
})

mysqlPool.query("SELECT 1")
.then(data => console.log('Database Connection Successful'))
.catch(err => console.log('Database Connection Failed. \n' + err))