const express = require("express");
const router = express.Router();

const closetCtrl = require('../controllers/closetController')

// get all the closet of one user, need to have userId in req.body
router.get('/getcloset',closetCtrl.getClosets);


router.post('/savecloset',closetCtrl.saveCloset);

module.exports = router;
