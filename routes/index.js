const express = require('express');
const router = express.Router({mergeParams:true});


const testRouter = require('./test')
const userRouter = require('./user')

// using nested routers allows better organization

router.use(testRouter)
router.use(userRouter)



module.exports = router;