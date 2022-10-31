const express = require("express");
const cors = require("cors");
const pool = require("./db.js");

// app.get('/',(req,res) => {
//     res.send('hello ')
// })
// app.get('/users',(req,res) => {
//     res.send('hello user ')
// })
const port = 5000;
const app = express();

app.use(cors());
app.use(express.json()); //req body??????

// app.get("/", async (req, res) => {
//   res.send("hi");
// });

app.get("/", async (req, res) => {
  try {
    const testQuery = await pool.query("SELECT * FROM products;");
    const name = testQuery.rows[0].productname;
    res.send(name);
    //console.log(testQuery);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(port, () => {
  console.log("i am sleepy! Stop calling this api");
});

///
