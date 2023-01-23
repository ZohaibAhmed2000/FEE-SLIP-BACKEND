const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Student Name is required"]
    },
    f_name: {
        type: String,
        require:[true, "Father Name is required"]
    },
    roll_number: {
        type: Number,
        required: [true, "Roll Number is required"],
        unique: [true,"Roll Number must be unique"],
    },
    seat_number: {
        type: Number,
        required: true,
        unique: true,
    },
    batch: {
        type: Number,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    contact: {
        type: String,
        require: true
    },
    email:{
        type:String,
        require:true
    },
    parent_contact:{
        type: String,
        require: true
    },
    course:{
        type:String,
        
    },
    pay_mode:{
        type:String,
       
    },
    paidfee :{
     type: [String]
    },
    created_on: {
        type: Date,
        default: Date.now,
    },

}, { timestamps: true })

const studentModel = mongoose.model("student", studentSchema);
module.exports = studentModel;