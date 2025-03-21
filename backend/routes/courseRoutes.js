const express = require('express');
const courseController = require('../controllers/courseController');

const router = express.Router();

// Course Routes
router.post('/courses', courseController.addCourse);
router.get('/courses', courseController.getCourses);
router.get('/courses/:id', courseController.getCourse);
router.put('/courses/:id', courseController.updateCourse);
router.delete('/courses/:id', courseController.deleteCourse);

// Additional Routes for Course-Student Relationship
router.post('/courses/assign', courseController.assignCourseToStudent);
router.get('/courses/:course_id/students', courseController.getStudentsInCourse);

module.exports = router;