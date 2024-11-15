const express = require('express')
const app = express();

app.set('view engine', 'ejs')

app.get('/about', (req, res) => {
    res.render('pages/about', {
        name: 'Bangladesh'
    })
})

app.listen(4000, () => {
    console.log("The running port is: 4000")
})