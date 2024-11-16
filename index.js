const express = require('express')
const app = express();

const adminRouter = express.Router();




const logger = (req, res, next) => {
    console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl} - ${req.protocol} - ${req.ip}`);
    res.end()
}
adminRouter.use(logger)

app.use('/admin', adminRouter)


adminRouter.get('/dashboard', (req, res) => {
    res.send('DashBoard')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.listen(4000, () => {
    console.log("The running port is: 4000")
})