const express = require("express");
const bodyParser = require("body-parser");
const studentRoutes = require("./students/routes");

const app = express();

app.use(bodyParser.json());
app.use("/students", studentRoutes);

app.get('/', (req, res) => {
    res.send("Home page")
})

app.listen(5000, () => console.log("running on port 5000"));