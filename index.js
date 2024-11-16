const express = require('express')
const app = express();

const myMiddleware1 = (req,res,next)=>{
    console.log('Middleware 1')
    next()
}
const myMiddleware2 = (req,res,next)=>{
    console.log('Middleware 2')
    next()
}

app.use(myMiddleware1, myMiddleware2)

app.get('/about', (req, res) => {
    res.send('About')
})

app.listen(4000, () => {
    console.log("The running port is: 4000")
})