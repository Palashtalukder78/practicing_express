const express = require('express');

const adminRouter = express.Router();

adminRouter.get('/', (req,res)=>{
    res.send('Dashboard')
})
adminRouter.get('/add_user', (req,res)=>{
    res.send('Add user')
})

module.exports = adminRouter;