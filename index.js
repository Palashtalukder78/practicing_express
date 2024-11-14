const express = require('express')
const app = express();
const cookieParser = require('cookie-parser');
const handler = require('./handler');

const adminRoute = express.Router()
app.use('/admin', adminRoute)
app.use(express.json())
app.use(cookieParser())

adminRoute.get('/dashboard',(req,res)=>{
    console.log(req.ip)
    res.send('We are in admin dashboard')
})



app.get('/user/:id', handler)
app.post('/user/', (req, res) => {
    console.log(req.body)
    res.send('This is the POST page')
})

app.listen(4000, () => {
    console.log("The running port is: 4000")
})