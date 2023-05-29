const express = require('express');
const router = express.Router({mergeParams:true});


const testRouter = require('./test')
// using nested routers allows better organization

router.use(testRouter)


module.exports = router;