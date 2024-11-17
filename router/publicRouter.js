const express = require('express');
const publicRouter = express.Router();

publicRouter
    .route('/user')
    .all((req,res,next)=>{
        console.log('Middleware')
        next()
    })
    .get((req,res)=>{
        res.send('Get About page')
    })
    .post((req,res)=>{
        res.send('Post About page')
    })
    .put((req,res)=>{
        res.send('Put About page')
    })
    .delete((req,res)=>{
        res.send('Delete About page')
    })

module.exports = publicRouter;