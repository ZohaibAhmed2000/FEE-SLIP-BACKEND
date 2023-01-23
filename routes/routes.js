const express = require("express")
const router = express.Router();
const studentControllers = require('../controllers/studentsController')


router.get("/getallstudents",studentControllers.getAllStudents)
router.post("/addstudent",studentControllers.addstudent)
router.post("/getstudent",studentControllers.getstudent)
router.post("/updatestudent",studentControllers.updatestudent)


module.exports = router;