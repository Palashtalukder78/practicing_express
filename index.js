const express = require('express')
const multer = require('multer')


//File upload folder
const UPLOAD_FOLDER = './uploads/'
// prepare the final multer upload object
const upload = multer({ dest: UPLOAD_FOLDER })


const app = express();

app.post("/", upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 5 }]), (req, res) => {
    res.send('Hello word')
})

app.listen(4000, () => {
    console.log("The running port is: 4000")
})