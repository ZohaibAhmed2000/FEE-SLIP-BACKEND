const studentModel = require('../models/studentSchema.js')



exports.getAllStudents = async (req, res) => {
    studentModel.find({}, (err, student) => {
        if (err) {
            res.json({
                message: "Something Went Wrong!"
            })
        }
        else {
            res.json(student)
        }
    })
}
exports.getstudent = async (req, res) => {
    console.log(req.body)
    try {
        const student = await studentModel.findOne({ roll_number: req.body.roll_number });
        if (!student) {
            res.json({
                message: "No Student Found with provided Roll Number"
            })
        }
        else {
            res.json(student)
        }
    } catch (error) {
        console.log(error)

    }
}

exports.addstudent = async (req, res) => {
    // console.log(req.body)
    const { name,
        f_name,
        roll_number,
        seat_number,
        batch,
        gender,
        contact,
        address,
        email,
        parent_contact,
        course,
        pay_mode
    } = req.body;

    // if (!name ||
    //     !roll_number ||
    //     !seat_number ||
    //     !f_name ||
    //     !batch ||
    //     !gender ||
    //     !contact ||
    //     !address ||
    //     !email ||
    //     !parent_contact) {
    //     res.json({
    //         message: "Required Fields are missing"
    //     })
    //     return;
    // }
    const objToSend = {
        name: name,
        f_name: f_name,
        roll_number: roll_number,
        seat_number: seat_number,
        batch: batch,
        address: address,
        gender: gender,
        contact: contact,
        email: email,
        parent_contact: parent_contact,
        course: course,
        pay_mode: pay_mode,
    }
    console.log(objToSend)
    studentModel.create(objToSend, (err, student) => {
        if (err) {
            res.json({
                message: err.message,
            })
        }
        else {
            res.json({
                message: "Student Created Successfully!",
                student
            })
        }
    })
}
exports.updatestudent = async (req, res) => {
    console.log(req.body,"Update")
    // console.log(req.body)
    // const objToSend = {
    //     name: req.body.name,
    //     f_name: req.body.f_name,
    //     roll_number: req.body.roll_number,
    //     seat_number: req.body.seat_number,
    //     batch: req.body.batch,
    //     address: req.body.address,
    //     gender: req.body.gender,
    //     contact: req.body.contact,
    //     email: req.body.email,
    //     parent_contact:req.body.parent_contact,
    // }
    try {
        let student = await studentModel.findOne({roll_number: req.body.roll_number})
        if (req.body.installment) {
            console.log("I'm here from if")
            // student.paidfee.splice(0,student.paidfee.length)
            student.paidfee.push(req.body.installment)
        }
            student.name = req.body.name,
            student.f_name = req.body.f_name,
            student.roll_number = req.body.roll_number,
            student.seat_number= req.body.seat_number,
            student.batch= req.body.batch,
            student.address= req.body.address,
            student.gender = req.body.gender,
            student.contact = req.body.contact,
            student.email = req.body.email,
            student.parent_contact = req.body.parent_contact,

        student.save()
        res.json({
            message: "Student Updated Successfully!",
            student
        })
    } catch (error) {
        res.json({
            message: "Failed!Something Went Wrong!!!"
        })

    }
}