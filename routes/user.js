const express = require("express");
const router = express.Router();

const userCtrl = require('../controllers/userController')

router.post('/register', userCtrl.saveUsers)
router.post('/login', userCtrl.loginUser)




module.exports = router;