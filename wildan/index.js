const express = require("express");
var cors = require('cors')
const app = express()
const port = 80;
app.use(express.json());
app.use(cors())
app.get('/getlist', function (req, res) {
  res.send({sensor_suhu: [{ suhu :38, waktu: "2023-01-04 11:20" }, { suhu : 39, waktu: "2023-01-04 11:23" }, { suhu: 37, waktu: "2023-01-04 11:25" }] });
});
app.get('/sensor1', function (req, res) {
  res.send({sensor1 : 190});
});
app.post("/sensor1", (req, res) => {
  //disini kodigan untuk menyimpan data kedalam database
  res.send(
    "suhu : " +
      req.body.suhu +
    "intensitas cahaya " +
      req.body.intensitascahaya +
    "motion sensor " +
      req.body.motionsensor
  );
});

app.get("/sensor2", function (req, res) {
  res.send({sensor2 : 120});
});
app.get("/sensor3", function (req, res) {
  res.send({sensor3 : 100});
});
app.listen(port, () => {
  console.log("cli-nodejs-api listening at http://localhost:80" );
});
