const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());

app.listen('localhost'||3000, () => {
  console.log(`Server is running.`);
});

app.get('/', (req, res) => {
    const {label,status,priority}=req.body;




})