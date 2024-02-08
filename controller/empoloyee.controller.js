const express = require('express'),
    router = express.Router()

const database = require('../database')

router.get('/', async (req, res) => {
    const [rows]= await database.query("SELECT * FROM employees")
        // .then(data => res.send(data[0][0]))
        .catch(err => console.log(err))
    res.send(rows);
})

module.exports = router;