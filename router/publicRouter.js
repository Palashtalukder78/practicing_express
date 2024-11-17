const express = require('express');
const publicRouter = express.Router();

publicRouter.param('user', (req, res, next, id) => {
    req.user = id === '1' ? "Admin" : 'Anonymous';
    next();
})

publicRouter.get('/:user', (req, res) => {
    res.send(`Welcome ${req.user}`)
})
publicRouter.get('/about', (req, res) => {
    res.send('About')
})

module.exports = publicRouter;