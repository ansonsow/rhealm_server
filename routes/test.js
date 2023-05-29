const express = require("express");
const router = express.Router();

const testCtrl = require("../controllers/testController");


router.get("/test", testCtrl.getTests);
router.post("/test", testCtrl.saveTest);



module.exports = router;