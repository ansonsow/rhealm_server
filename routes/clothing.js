const express = require("express");
const router = express.Router();

const clothingCtrl = require('../controllers/clothingController')

// get all the clothing for given userId in req.body
router.get('/clothing/user', clothingCtrl.getUserClothing)

// get all the clothing for given closetId in req.body
router.get('/clothing/closet', clothingCtrl.getClosetClothing)

// create a new clothing document
router.post('/clothing',clothingCtrl.saveClothing)

// add a clothing to a closet for given clothingId and closetId in req.body
router.put('/clothing',clothingCtrl.addToCloset)

// remove a clothing from a closet for given clothingId and closetId in req.body
router.delete('/clothing/closet',clothingCtrl.removeFromCloset)

// remove a clothing document
router.delete('/clothing',clothingCtrl.removeClothing)

router.put('/clothing/edit',clothingCtrl.editClothing)

module.exports = router;

