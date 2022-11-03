const express = require("express");
const pool = require("./db.js");
const formidable = require("express-formidable");
const cors = require("cors");

const studu = require("./routes.js");

const bodyParser = require("body-parser");


//import { user, password } from "./action.js";

const port = 5000;
const app = express();

app.use(express.json());
app.use(formidable());
app.use(cors());
//app.use(bodyParser);

// app.use(express.static(path.join(__dirname, "views")));

app.use("/a", studu);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "\\ind.html");
});

app.listen(port, () => {
  console.log(`i am sleepy! Stop calling this api on port ${port}`);
});