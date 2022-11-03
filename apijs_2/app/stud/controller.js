const pool = require("../db");
const queries = require("./queries");

const getstudents = async (req, res) => {
  pool.query(queries.getstudents, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const auth = (req, res) => {
  pool.query(queries.passwordAuth, [req.fields.username], (error, results) => {
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
  });
};

const getCity = (req, res) => {
  pool.query(queries.city, (error, results) => {
    if (error) throw error;
    else {
      // console.log(req.feilds);
      res.send(results.rows);
    }
  });
};

const getHosp = (req, res) => {
  // console.log("calllll here");
  // console.log("hh", req.fields.city);
  // res.send("{'response': 'success'}");
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

const selectBed = (req, res) => {
  pool.query(queries.updateBed, [req.fields.bedid], (error, results) => {
    if (error) throw error;
    else {
      res.send(results.rows);
    }
  });
};

const updatePatient = (req, res) => {
  // console.log(req);
  // pool.query(
  //   queries.updatePatient,
  //   [
  //     req.fields.userid,
  //     req.fields.hospid,
  //     req.fields.wardid,
  //     req.fields.bedid,
  //     req.fields.patientname,
  //     req.fields.patientage,
  //     req.fields.contact,
  //   ],
  //   (error, results) => {
  //     // if (error) throw error;
  //     // else {
  //     res.send(results.rows);
  //     console.log(results.rows);
  //     // }
  //   }
  // );
};

const bookBed = (req, res) => {
  pool.query(
    queries.bookBed,
    [req.fields.patientid, req.feilds.doj],
    (error, results) => {
      if (error) throw error;
      else {
        res.send(results.rows);
      }
    }
  );
};

const viewBooking = (req, res) => {
  pool.query(queries.viewBooking, [req.fields.patientid], (error, results) => {
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
  getCity,
  selectBed,
  updatePatient,
  bookBed,
  viewBooking,
};
