const express = require('express');
const router = express.Router({mergeParams:true});


const testRouter = require('./test')
const userRouter = require('./user')
const closetRouter = require('./closet')
const clothingRouter = require('./clothing')

// using nested routers allows better organization

router.use(testRouter)
router.use(userRouter)
router.use(closetRouter)
router.use(clothingRouter)



module.exports = router;