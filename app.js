const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/routes");


const BASE_URI = `mongodb+srv://admin:12345@cluster0.nx32dqa.mongodb.net/test`
mongoose.connect(BASE_URI).then((res)=>console.log("Connenct")).catch((err)=>console.log(err))

app.use(express.json());
app.use(cors());
app.use("/api", router);

app.listen(PORT, () =>
  console.log(`server  running on http://localhost:${PORT}`)
);