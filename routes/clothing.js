const express = require("express");
const router = express.Router();

const clothingCtrl = require('../controllers/clothingController')


router.get('/clothing/user', clothingCtrl.getUserClothing)
router.get('/clothing/closet', clothingCtrl.getClosetClothing)
router.post('/clothing',clothingCtrl.saveClothing)
router.put('/clothing',clothingCtrl.addToCloset)

module.exports = router;

