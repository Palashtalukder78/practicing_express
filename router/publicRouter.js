const express = require('express');
const adminRouter = require('./adminRouter');
const publicRouter = express.Router();

publicRouter.get('/', (req, res) => {
    for(let i=0; i<10; i++){
        if(i === 5){
            next('There was an Error')
        }else{
            res.write('a')
        }
    }
    res.end()
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
    if (res.headersSent) {
        next('There was an Problem')
    } else {
        if(err.message){
            res.status(500).send(err.message)
        }else{
            res.status(500).send('There was a server erro')
        }
    }
})

module.exports = publicRouter;