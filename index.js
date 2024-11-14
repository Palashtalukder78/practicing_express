const express = require('express')
const app = express();
const admin = express();

app.route('/users')
    .get((req, res) => {
        console.log(req.userDetails)
        res.send('This is the Home page for GET')
    })
    .post((req, res) => {
        console.log(req.userDetails)
        res.send('This is the Home page for POST')
    })
    .put((req, res) => {
        console.log(req.userDetails)
        res.send('This is the Home page for PUT')
    })

// app.get('/user/:id', (req, res) => {
//     console.log(req.userDetails)
//     res.send('This is the Home page')
// })
// admin.post('/', (req, res) => {
//     res.send('This is admin dashboard page')
// })


app.use('/admin', admin);
app.listen(4000, () => {
    console.log("The running port is: 4000")
})