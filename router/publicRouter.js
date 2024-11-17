const express = require('express');
const fs = require('fs')
const adminRouter = require('./adminRouter');
const publicRouter = express.Router();


publicRouter.get('/', (req, res, next) => {
    fs.readFileSync("/file-does-not-exist", (err, data)=>{
        if(err){
            next(err)
        }else{
            res.send(data)
        }
    })
});
publicRouter.use((err, req,res, next)=>{
    if(res.headersSent){
        next('There was a Problem')
    }else{
        if(err.message){
            res.status(500).send(err.message)
        }else{
            res.send('There was an Error!')
        }
    }
})

module.exports = publicRouter;