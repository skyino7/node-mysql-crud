const database = require('../database')

module.exports.getAllEmployees = async () => {
    const [rows] = await database.query("SELECT * FROM employees")
        // .then(data => res.send(data[0][0]))
        .catch(err => console.log(err))
    return rows;
}