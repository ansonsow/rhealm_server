const express = require("express");
const router = express.Router();

const userCtrl = require('../controllers/userController')

router.post('/register', userCtrl.saveUsers)
router.post('/login', userCtrl.loginUser)

router.post('/register/oauth', userCtrl.saveUsersOAuth)
router.post('/login/oauth', userCtrl.loginUserOAuth)

router.get('/user/:userId', userCtrl.getUser)

router.put('/user', userCtrl.editUser)




module.exports = router;