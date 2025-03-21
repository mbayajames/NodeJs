const express = require('express');
const studentController = require('../controllers/studentController');

const router = express.Router();

// Student Routes
router.post('/students', studentController.addStudent);
router.get('/students', studentController.getStudents);
router.get('/students/:id', studentController.getStudent);
router.put('/students/:id', studentController.updateStudent);
router.delete('/students/:id', studentController.deleteStudent);

// Additional Routes for Student-Course Relationship
router.post('/students/assign', studentController.assignStudentToCourse);
router.get('/students/:student_id/courses', studentController.getCoursesForStudent);

module.exports = router;