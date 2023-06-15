const express = require('express');
const router = express.Router({mergeParams:true});


const testRouter = require('./test')
const userRouter = require('./user')
const closetRouter = require('./closet')

// using nested routers allows better organization

router.use(testRouter)
router.use(userRouter)
router.use(closetRouter)



module.exports = router;