const getStudents = "SELECT * FROM students";
const getStudent = "SELECT * FROM students WHERE id = $1";
const addStudent = "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)";
const deleteStudent = "DELETE FROM students WHERE id = $1";
const updateStudent = "UPDATE students SET name = $2, email = $3, age = $4, dob = $5 WHERE id = $1";

module.exports = { getStudents, getStudent, addStudent, deleteStudent, updateStudent };