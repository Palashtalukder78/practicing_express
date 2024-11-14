const express = require('express')
const app = express();

app.set('view engine', 'ejs')

app.route('/users')
    .get((req, res) => {
        res.render('pages/about')
    })
    .post((req, res) => {
        res.send('This is the Home page for POST')
    })
    .put((req, res) => {
        res.send('This is the Home page for PUT')
    })

// app.get('/user/:id', (req, res) => {
//     console.log(req.userDetails)
//     res.send('This is the Home page')
// })
// admin.post('/', (req, res) => {
//     res.send('This is admin dashboard page')
// })

app.listen(4000, () => {
    console.log("The running port is: 4000")
})