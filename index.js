const express = require('express')
const app = express()

// app.use(express.static(__dirname + '/public/', {
//     index:'home.html'
// }))

const router = express.Router({
    caseSensitive: true
})

app.use(router)

router.get('/about', (req, res) => {
    res.send('This is the Home page')
})
router.post('/', (req, res) => {
    res.send('This is the Home page with post method')
})

app.listen(4000, () => {
    console.log("The running port is: 4000")
})