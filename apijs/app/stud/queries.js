const getstudents = "select * from login;";

const passwordAuth = "SELECT password FROM login WHERE username=($1);";

const hosp = "SELECT hospitalname, hospitalid FROM hospital WHERE cityname=($1);";

const ward = "SELECT wardtype, wardid FROM ward WHERE hospitalid =($1);";

const bed = "SELECT bedid,isprivate FROM bed WHERE wardid=($1) and isavailable=true;"

module.exports = {
  getstudents,
  passwordAuth,
  hosp,
  ward,
  bed,
};
