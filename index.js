const express = require('express')
const app = express();
const admin = express();

app.param('id', (req,res,next,id) =>{
    const user ={
        userId: id,
        country: 'Bangladesh'
    }
    req.userDetails = user;
    next()
})

app.get('/user/:id', (req, res) => {
    console.log(req.userDetails)
    res.send('This is the Home page')
})
admin.post('/', (req, res) => {
    res.send('This is admin dashboard page')
})


app.use('/admin', admin);
app.listen(4000, () => {
    console.log("The running port is: 4000")
})