const express = require('express');
const res = require('express/lib/response');
const multer=require('multer')
const router = express.Router()
const app = express()
const path = require('path')
app.use(express.json());

const profile=require("../models/profile.model")



const imageStorage = multer.diskStorage({
   
    // Destination to store image     
    destination: 'images', 
      filename: (req, file, cb) => {
          cb(null, file.fieldname + '_' + Date.now() 
             + path.extname(file.originalname))
            // file.fieldname is name of the field (image)
            // path.extname get the uploaded file extension
    }
});



const imageUpload = multer({
    storage: imageStorage,
    limits: {
      fileSize: 10000000 // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(png||jpg||pdf)$/)) { 
         // upload only png and jpg format
         console.log("imageStorage");
         return cb(new Error('Please upload a Image'))
       }
     cb(undefined, true)
  }
}) 

router.post('/', imageUpload.single('image'), (req, res) => {
    res.send(req.file)
}, (error, req, res, next) => {
    console.log("hi i am an error");
    res.status(400).send({ error: error.message })
})

console.log("line46");

module.exports =router;