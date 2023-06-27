const express = require("express");
const router = express.Router();

const userCtrl = require('../controllers/userController')

router.post('/register', userCtrl.saveUsers)
router.post('/login', userCtrl.loginUser)


router.get('/user',userCtrl.getUser)

router.put('/user',userCtrl.editUser)




module.exports = router;