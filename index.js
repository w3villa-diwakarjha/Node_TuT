// const os= require('os')
// console.log(os.arch())
// console.log(os.freemem()/(1024*1024*1024))
// console.log(os.totalmem()/(1024*1024*1024))
// console.log(os.hostname())
// console.log(os.platform())
// console.log(os.userInfo())

const express=require('express')
const app=express();
const EventEmitter= require('events');

let count=0;
const event= new EventEmitter();
event.on("countAPI",()=>{
    count++;
    console.log("event Called",count)
})

app.get('/',(req,res)=>{
    res.send("api called");
    event.emit("countAPI")
})

app.get('/search',(req,res)=>{
    res.send("search api called")
    event.emit("countAPI")
})

app.get('/update',(_,res)=>{
    res.send("update api called")
    event.emit("countAPI")
})

app.listen(5000);
