const express = require("express");
const router = express.Router();

const closetCtrl = require('../controllers/closetController')

// get all the closet of one user, need to have userId in req.body
router.get('/closet',closetCtrl.getClosets);


router.post('/closet',closetCtrl.saveCloset);

module.exports = router;
