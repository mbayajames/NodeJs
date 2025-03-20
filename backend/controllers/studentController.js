const db = require('../models/indexStart');
const createError = require('http-errors');

//use the model
const Student = db.students
// const Course = db.courses

module.exports = {

    //add Student
    addStudent : async(req, res, next) => {

        try {
            let info = {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                gender: req.body.gender,
                //course_id: req.body.course_id
            }
            const addStudent = await Student.create(info)
            res.status(200).send(addStudent)
        } catch (error) {
            next(error)
        }
    },

    //GET ALL STUDENTS WITH COURSE
    // getStudents : async (req, res, next) => {
    //     try {
    //         let allStudents = await Student.findAll ({
    //             include: [{model: Course, attributes:['coursename']}]
    //         })
    //         res.status(200).send(allStudents)
    //     } catch (error) {
    //         next(error)
    //     }
    // },


    // GET STUDENT BY ID
    getStudent :async(req, res, next) => {
        try {
            let id = req.params.id
            let student = await Student.findOne({where: {student_id: id}})

            if(!student){
                throw(createError(404, "Student does not exist"))
            }
            res.status(200).send(student)
        } catch (error) {
            next(errr)
        }
    },

    //UPDATE STUDENT
    updateStudent : async(req, res, next) => {
        try {
            let id = req.params.id

            const student = await Student.update(req.body, { where: {student_id: id}})
            if(!student){
                throw(createError(404, "Student does not exist"))
            }
            res.status(200).send(student)
        } catch (error) {
            next(error)
        }
    },

    //DELETE STUDENT
    deleteStudent : async(req, res, next) => {
        try{
            let id = req.body.params.id

            await Student.destroy({ where: {student_id: id}})
            res.status(200).send("student Deleted Successfully")
        } catch (error) {
            next(error)
        }
    }
}
