const express = require('express')
const app = express();

app.get('/test', (req,res)=>{
    res.send('Hello , this is testing')
})

app.get('/about', (req, res) => {
    res.redirect('/test')
    res.end()
})

app.listen(4000, () => {
    console.log("The running port is: 4000")
})