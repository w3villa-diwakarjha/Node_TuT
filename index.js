// const express =require('express')
// const config= require('./config')
// const product= require('./product')
// const app=express();

// app.use(express.json())

// app.get('/search/:key',async (req,res)=>{
//     console.log(req.params)
//     let data=await product.find(
//         {
//             "$or":[
//                 {
//                     "name": {$regex: req.params.key}
//                 },
//                 {
//                     "brand": {$regex: req.params.key}
//                 },
//                 {
//                     "category": {$regex: req.params.key}
//                 }
//             ]
//         }
//     );
//     res.send(data);
// })

// app.listen(5000);

const express = require('express')
const app = express();
const config = require('./config')
const product = require('./product')
const multer = require('multer')

app.use(express.json())


const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads')
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + ".jpg");
        }
    })
}).single("brand")

app.post('/upload', upload , (req, res) => {
    console.log(req.body)
    res.send("file Upload")
})
app.listen(5000);