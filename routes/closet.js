const express = require("express");
const router = express.Router();

const closetCtrl = require('../controllers/closetController')

// get all the closet of one user, need to have userId in req.body
router.get('/closet',closetCtrl.getClosets);

// create a new closet, need to have userId in req.body
router.post('/closet',closetCtrl.saveCloset);

// remove a closet, need to have closetId in req.body
router.delete('/closet',closetCtrl.removeCloset)

module.exports = router;
