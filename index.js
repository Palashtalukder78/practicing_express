const express = require('express')
const app = express()

app.use(express.json())
app.get('/', (req, res) => {
    res.send('This is the Home page')
})
app.post('/', (req, res) => {
    console.log(req.body.firstName)
    res.send('This is the Home page with post method')
})

app.listen(4000, ()=>{
    console.log("The running port is: 4000")
})