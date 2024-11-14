const express = require('express')
const app = express();

const adminRoute = express.Router()
app.use('/admin', adminRoute)

adminRoute.get('/dashboard',(req,res)=>{
    console.log(req.baseUrl)
    res.send('We are in admin dashboard')
})



app.get('/user/:id', (req, res) => {
    res.send('This is the Home page')
})

app.listen(4000, () => {
    console.log("The running port is: 4000")
})