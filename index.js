const express = require('express')
const multer = require('multer')


//File upload folder
const UPLOAD_FOLDER = './uploads/'
// prepare the final multer upload object
const upload = multer({
    dest: UPLOAD_FOLDER,
    limits: {
        fileSize: 1000000,
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
            cb(null, true)
        } else {
            // cb(null, false)
            cb(new Error('Only Jpg,Png and jpeg supported'))
        }
    }
})


const app = express();

app.post("/", upload.single('avatar'), (req, res) => {
    res.send('Hello word')
})

app.use((err,req,res,next)=>{
    if(err){
        res.status(500).send(err.message)
    }else{
        res.send('Success')
    }
})


app.listen(4000, () => {
    console.log("The running port is: 4000")
})