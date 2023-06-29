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
app.get('/list',async (req,res)=>{
    let data=await products.find();
    console.log(data)
    res.send(data);
})
app.delete('/delete/:_id', async (req,res)=>{
    console.log(req.params)
    let data=await products.deleteOne(req.params)
    res.send(data)
})
app.put('/update/:_id',async (req,res)=>{
    console.log(req.params)
    let data= await products.updateOne({_id: req.params}, {$set: req.body})
    res.send(data)
})
app.listen(5000);