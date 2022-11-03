const { Router } = require("express");
const controller = require("./controller");
const router = Router();

//router.get("/", controller.getstudents);
router.post("/auth", controller.auth);
router.post("/city", controller.getCity);
router.post("/hosp", controller.getHosp);
router.post("/ward", controller.getWard);
router.post("/bed", controller.getBed);
router.post("/bed/select",controller.selectBed);

router.post("/patient",controller.updatePatient);
router.post("/bookBed",controller.bookBed);
router.post("/viewBooking",controller.viewBooking);

module.exports = router;