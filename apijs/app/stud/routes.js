const { Router } = require("express");
const controller = require("./controller");
const router = Router();

//router.get("/", controller.getstudents);
router.post("/auth", controller.auth);
router.post("/city", controller.getHosp);
router.post("/hosp", controller.getWard);
router.post("/ward", controller.getBed);

module.exports = router;
