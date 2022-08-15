const { Router } = require("express");
const { getStudents, getStudent, addStudent, deleteStudent, updateStudent } = require("./controller");

const router = Router();

router.get("/", getStudents);
router.get("/:id", getStudent);
router.post("/", addStudent);
router.delete("/:id", deleteStudent);
router.put("/:id", updateStudent);
router.patch("/:id", updateStudent);

module.exports = router