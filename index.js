const {MongoClient}= require('mongodb')
const mongodb= require('./mongodb')

const main=async ()=>{
    let data= await mongodb();
    data= await data.find().toArray();
    console.log(data);
}

main();
