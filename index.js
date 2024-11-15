const express = require('express')
const app = express();

app.set('view engine', 'ejs')

app.get('/about', (req, res) => {
    res.cookie('uni-name','Bremen');
    res.end()
})

app.listen(4000, () => {
    console.log("The running port is: 4000")
})