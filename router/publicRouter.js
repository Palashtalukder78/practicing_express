const express = require('express');
const adminRouter = require('./adminRouter');
const publicRouter = express.Router();

publicRouter.get('/', (req, res) => {
    res.send(a)
})

publicRouter.use((req,res,next)=>{
    // res.status(404).send('Requested url is not found')
    next('Requested url is not found')
})

//invisible default error handleing
/* app.use((err,req,res,next)=>{

}) */

//overwrite
publicRouter.use((err, req, res, next) => {
    if (err.message) {
        res.status(500).send(err.message)
    } else {
        res.status(500).send("There was a server side error!")
    }
})

module.exports = publicRouter;