const express = require('express'),
    app = express();
const db = require('./database')

PORT=3000

db.query("SELECT 1")
    .then(() => {
        console.log('Database Connection Successful')
        app.listen(PORT,
            () => console.log('Server Started at ' + PORT))
    })
    .catch(err => console.log('Database Connection Failed. \n' + err))
