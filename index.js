const express = require('express')
const app = express();


app.get('/about', (req, res) => {
    res.set('Platform', 'Fiverr and Upwork');
    console.log(res.get('Platform'))
    res.end()
})

app.listen(4000, () => {
    console.log("The running port is: 4000")
})