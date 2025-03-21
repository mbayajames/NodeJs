const db = require('../models/indexStart');
const createError = require('http-errors');

// Use the models
const Course = db.courses;
const Student = db.students;

module.exports = {
    // Add a new course
    addCourse: async (req, res, next) => {
        try {
            let info = {
                title: req.body.title,
                description: req.body.description,
                instructor: req.body.instructor,
            };
            const addCourse = await Course.create(info);
            res.status(200).send(addCourse);
        } catch (error) {
            next(error);
        }
    },

    // Get all courses
    getCourses: async (req, res, next) => {
        try {
            let allCourses = await Course.findAll();
            res.status(200).send(allCourses);
        } catch (error) {
            next(error);
        }
    },

    // Get a course by ID
    getCourse: async (req, res, next) => {
        try {
            let id = req.params.id;
            let course = await Course.findOne({ where: { course_id: id } });

            if (!course) {
                throw createError(404, "Course does not exist");
            }
            res.status(200).send(course);
        } catch (error) {
            next(error);
        }
    },

    // Update a course
    updateCourse: async (req, res, next) => {
        try {
            let id = req.params.id;
            const course = await Course.update(req.body, { where: { course_id: id } });

            if (!course[0]) { // Check if any rows were updated
                throw createError(404, "Course does not exist");
            }
            res.status(200).send("Course updated successfully");
        } catch (error) {
            next(error);
        }
    },

    // Delete a course
    deleteCourse: async (req, res, next) => {
        try {
            let id = req.params.id;
            await Course.destroy({ where: { course_id: id } });
            res.status(200).send("Course deleted successfully");
        } catch (error) {
            next(error);
        }
    },

    // Assign a course to a student (if you have a relationship between Student and Course)
    assignCourseToStudent: async (req, res, next) => {
        try {
            const { student_id, course_id } = req.body;

            // Find the student and course
            const student = await Student.findByPk(student_id);
            const course = await Course.findByPk(course_id);

            if (!student || !course) {
                throw createError(404, "Student or Course not found");
            }

            // Add the course to the student (assuming a many-to-many relationship)
            await student.addCourse(course);
            res.status(200).send("Course assigned to student successfully");
        } catch (error) {
            next(error);
        }
    },

    // Get all students enrolled in a specific course
    getStudentsInCourse: async (req, res, next) => {
        try {
            let course_id = req.params.course_id;
            const course = await Course.findByPk(course_id, {
                include: [{ model: Student, through: { attributes: [] } }], // Assuming a many-to-many relationship
            });

            if (!course) {
                throw createError(404, "Course not found");
            }
            res.status(200).send(course.students);
        } catch (error) {
            next(error);
        }
    },
};