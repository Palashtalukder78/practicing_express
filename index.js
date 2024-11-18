const express = require('express')
const multer = require('multer')
const path = require('path')


//File upload folder
const UPLOAD_FOLDER = './uploads/'

// Multer diskStorage
const storage = multer.diskStorage({
    destination: (req,file,cb)=> {
        cb(null, UPLOAD_FOLDER);
    },
    filename: (req,file, cb)=>{
        const fileExt = path.extname(file.originalname);
        const fileName = file.originalname.replace(fileExt, '').toLocaleLowerCase().split(' ').join('-')+ '-' + Date.now();
        cb(null, fileName + fileExt)
    }
})
// prepare the final multer upload object
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1000000,
    },
    fileFilter: (req, file, cb) => {
        if(file.fieldname === 'avatar'){
            if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
                cb(null, true)
            } else {
                // cb(null, false)
                cb(new Error('Only Jpg,Png and jpeg allowed'))
            }
        } else if (file.fieldname === 'doc'){
            if (file.mimetype === 'application/pdf') {
                cb(null, true)
            } else {
                // cb(null, false)
                cb(new Error('Only pdf allowed'))
            }
        }else{
            cb(new Error('There was an unknown Error'))
        }
    }
})


const app = express();

app.post("/", upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'doc', maxCount: 1 }]), (req, res) => {
    res.send('Hello word')
})

app.use((err, req, res, next) => {
    if (err) {
        res.status(500).send(err.message)
    } else {
        res.send('Success')
    }
})


app.listen(4000, () => {
    console.log("The running port is: 4000")
})