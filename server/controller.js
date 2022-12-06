const pool = require("./db");
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
      console.log(req.feilds);
      res.send(results.rows);
    }
  });
};

// const getHosp = (req, res) => {
//   console.log("hii");
//   console.log("req",req.fields.city)
//   pool.query(queries.hosp, [req.fields.city], (error, results) => {
//     if (error) throw error;
//     else {
//         //console.log(results.rows);
//       res.send(results.rows);
//     }
//   });
// };

const getHosp = (req, res) => {

  pool.query(queries.hosp, [req.params.selcity], (error, results) => {

    if (error) throw error;

    else {

      res.send(results.rows);

    }

  });

};

const getWard = (req, res) => {
  pool.query(queries.ward, [req.params.sel_hospid], (error, results) => {
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

// const updatePatient = (req, res) => {
//   console.log(req.body)
//   let {userid,hospid,wardid,bedid,name,age,contactno}=req.body;
//   console.log("hiii",userid)
//   pool.query(queries.updatePatient,[userid,hospid,wardid,bedid,name,age,contactno],(error, results) => {
//     if (error) throw error;
//    //res.send(200).send("patient added succesfully")
//    res.json({
//     "boolean":true
//    })

//   })
// }
    // queries.updatePatient,
    // [
    //   req.params.userid,
    //   req.params.hospid,
    //   req.params.wardid,
    //   req.params.bedid,
    //   req.params.patientname,
    //   req.params.patientage,
    //   req.params.contact,
    // ],


    const insertPatient = (req, res) => {
      let {patientname,patientage,email}=req.body;
      console.log(req.body)
      pool.query(queries.insertPatient,[patientname,patientage,email], (error, results) => {
        if (error) throw error;
        else {
          console.log(req.body);
          res.staus(200).json(results.rows);
        }
      });
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
  //updatePatient,
  bookBed,
  viewBooking,
  insertPatient,
};