const pool = require("../db");
const queries = require("./queries");

const getStudents = (req, res) => {
    pool.query(queries.getStudents, (err, results) => {
        if (err) throw err;
        res.status(200).json(results.rows);
    })
}

const getStudent = (req, res) => {
    let id = req.params.id
    pool.query(queries.getStudent, [id], (err, results) => {
        if (err) throw err;
        if (results.rows.length){
            res.status(200).json(results.rows[0]);
        } else {
            res.status(404).json("Not found")
        }
    })
}

const addStudent = (req, res) => {
    let data = req.body
    if (!data.name) res.status(400).send("name is required")
    if (!data.email) res.status(400).send("email is required")
    if (!data.age) res.status(400).send("age is required")
    if (!data.dateOfBirth) res.status(400).send("dateOfBirth is required")
    pool.query(queries.addStudent, [data.name, data.email, data.age, data.dateOfBirth], (err, results) => {
        if (err) throw err;
        res.status(201).json(req.body)
    })
}

const deleteStudent = (req, res) => {
    let id = req.params.id
    pool.query(queries.deleteStudent, [id], (err, results) => {
        if (err) throw err;
        res.status(204).json("successfully deleted");
    })
}

const updateStudent = (req, res) => {
    let id = req.params.id
    let data = req.body
    pool.query(queries.getStudent, [id], (err, results) => {
        if (err) throw err;
        if (results.rows.length){
            let student = results.rows[0]
            let name = data.name ? data.name : student.name 
            let email = data.email ? data.email : student.email 
            let age = data.age ? data.age : student.age 
            let dateOfBirth = data.dateOfBirth ? data.dateOfBirth : student.dob 
            pool.query(queries.updateStudent, [id, name, email, age, dateOfBirth], (err, results) => {
                if (err) throw err
                res.status(201).send("successfully updated")
            })
        } else {
            res.status(404).json("Not found")
        }
    })
}

module.exports = { getStudents, getStudent, addStudent, deleteStudent, updateStudent }