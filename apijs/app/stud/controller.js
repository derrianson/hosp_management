const pool = require("../db");
const queries = require("./queries");

const getstudents = async (req, res) => {
  pool.query(queries.getstudents, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const auth = (req, res) => {
  pool.query(
    queries.passwordAuth,
    [req.fields["username"]],
    (error, results) => {
      if (error) throw error;
      else {
        if (req.fields.password == results.rows[0].password) {
          res.send("succes!!!");
          console.log("Suc");
        } else {
          res.send("password mismatch!!!!!!");
          console.log("fail");
        }
      }
    }
  );
};

const getHosp = (req, res) => {
  pool.query(queries.hosp, [req.fields.city], (error, results) => {
    if (error) throw error;
    else {
      res.send(results.rows);
    }
  });
};

const getWard = (req, res) => {
  pool.query(queries.ward, [req.fields.hospid], (error, results) => {
    if (error) throw error;
    else {
      res.send(results.rows);
    }
  });
};

const getBed = (req, res) => {
  pool.query(queries.bed, [req.fields.wardid], (error, results) => {
    if (error) throw error;
    else {
      res.send(results.rows);
    }
  });
};

module.exports = {
  getstudents,
  auth,
  getHosp,
  getWard,
  getBed,
};
