const express = require('express')
const adminRouter = require('./router/adminRouter');
const publicRouter = require('./router/publicRouter');

const app = express();

app.use('/', publicRouter);
app.use('/admin', adminRouter)


app.listen(4000, () => {
    console.log("The running port is: 4000")
})