// const {MongoClient}= require('mongodb')
// const mongodb= require('./mongodb')

// const main=async ()=>{
//     let data= await mongodb();
//     data= await data.find().toArray();
//     console.log(data);
// }

// main();


const express=require('express')
const app=express();
const config= require('./config')
const products=require('./product')

app.use(express.json())
app.post('/',async (req,res)=>{
    let data=await new products(req.body);
    let result=await data.save();
    console.log(result)
    res.send(result)
})
app.listen(5000);