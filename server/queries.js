const getstudents = "select * from login;";

const passwordAuth = "SELECT password FROM login WHERE username=($1);";

const hosp = "SELECT hospitalname, hospitalid FROM hospital WHERE cityname=($1);";

const ward = "SELECT wardtype, wardid FROM ward WHERE hospitalid =($1);";

const bed = "SELECT bedid,isprivate FROM bed WHERE wardid=($1) and isavailable=true;";

const city ="SELECT distinct(cityname) FROM  hospital;";

const updateBed ="UPDATE bed SET isavailable=false WHERE bedid =($1) returning *";

//const updatePatient = "INSERT INTO patient (userid,hospitalid,wardid,bedid,patientname,patientage,contact) VALUES(($1),($2),($3),($4),($5),($6),($7)) returning *;";

const bookBed ="INSERT INTO bill (ptientid,dateofjoining) VALUES(($1),($2));";

const insertPatient="INSERT INTO patients1 (patientname,patientage,email) VALUES(($1),($2),($3)) returning *;";





module.exports = {
  getstudents,
  passwordAuth,
  hosp,
  ward,
  bed,
  city,
  updateBed,
  //updatePatient,
  insertPatient
};