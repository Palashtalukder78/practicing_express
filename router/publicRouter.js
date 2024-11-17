const express = require('express');
const adminRouter = require('./adminRouter');
const publicRouter = express.Router();

publicRouter.get('/', (req,res)=>{
    res.send(a)
})

//invisible default error handleing
/* app.use((err,req,res,next)=>{

}) */

//overwrite
publicRouter.use((err,req,res,next)=>{
    console.log(err)
    res.send("There was a server side error!")
})

module.exports = publicRouter;