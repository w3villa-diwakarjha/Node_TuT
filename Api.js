const mongodb=require('./mongodb')
const mongo= require('mongodb')
const express= require('express');
const app= express();

app.use(express.json());

app.get('',async(req,res)=>{
    const data= await mongodb();
    const result=await data.find().toArray()
    // console.log(result);
    res.send(result);
})

app.post('',async (req,res)=>{
    const data=await mongodb();
    const result=await data.insertOne(req.body)
    res.send(result)
})

app.put('/:name',async (req,res)=>{
    let data=await mongodb();
    let result=await data.updateMany({name: req.params.name},{$set: req.body});
    res.send(result);
})

app.delete('/:id',async (req,res)=>{
    let data=await mongodb();
    // let result= await data.find().toArray();
    let result= await data.deleteOne({_id: new mongo.ObjectId(req.params.id),})
    // console.log( "your id is =>"+req.params.id)
    // console.log(result);
    res.send(result)
})

app.listen(5000);
