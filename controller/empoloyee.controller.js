const express = require('express'),
    router = express.Router()

const database = require('../database')

router.get('/', (req, res) => {
    database.query("SELECT * FROM employees")
        .then(data => res.send(data))
        .catch(err => console.log(err))
})

module.exports = router;