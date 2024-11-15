const express = require('express')
const app = express();

app.set('view engine', 'ejs')

app.get('/about', (req, res) => {
    res.format({
        'text/plain':()=>{
            res.send('accept=text/plain')
        },
        'text/html': ()=>{
            res.render('pages/about', {
                name: 'Bangladesh'
            })
        },
        'application/json': ()=>{
            res.send({
                name: 'Bangladesh',
                currency: 'TAKA'
            })
        },
        default: ()=>{
            res.status(406).send('Not Acceptable')
        }
    })
})

app.listen(4000, () => {
    console.log("The running port is: 4000")
})