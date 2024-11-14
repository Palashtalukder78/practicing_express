const express = require('express')
const app = express();

const adminRoute = express.Router()
app.use('/admin', adminRoute)

adminRoute.get('/dashboard',(req,res)=>{
    console.log(req.originalUrl)
    console.log(req.url)
    res.send('We are in admin dashboard')
})



app.get('/user/:id', (req, res) => {
    console.log(req.originalUrl)
    console.log(req.url)
    res.send('This is the Home page')
})

app.listen(4000, () => {
    console.log("The running port is: 4000")
})