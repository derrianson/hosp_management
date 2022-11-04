const { Router } = require("express");
const controller = require("./controller");
const router = Router();

//router.get("/", controller.getstudents);
router.post("/auth", controller.auth);
router.post("/city", controller.getCity);
//router.post("/hosp", controller.getHosp);
router.get("/hosp/:selcity", controller.getHosp);
router.get("/ward/:sel_hospid", controller.getWard);
router.post("/bed", controller.getBed);
router.post("/bed/select",controller.selectBed);

//router.post("/patient",controller.updatePatient);
router.post("/bookBed",controller.bookBed);
router.post("/viewBooking",controller.viewBooking);
router.post("/pat", controller.insertPatient);

module.exports = router;