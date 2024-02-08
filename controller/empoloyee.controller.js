const express = require('express'),
    router = express.Router()

const service = require('../services/employee.service')

router.get('/', async (req, res) => {
    const employees = await service.getAllEmployees()
    res.send(employees);
})

module.exports = router;