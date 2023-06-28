const mongodb= require('./mongodb');
const {MongoClient}= require('mongodb');

const insert= async ()=>{
    const db=await mongodb();
    const result= await db.insertMany([
        {name: 'max 1',brand: 'micromax',price: 220,category: 'mobile'},
        {name: 'max 2',brand: 'micromax',price: 320,category: 'mobile'},
        {name: 'max 3',brand: 'micromax',price: 420,category: 'mobile'}
    ])
    if(result.acknowledged)
    {
        console.log("Data Inserted");
    }
}
insert();
