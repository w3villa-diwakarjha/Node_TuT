const mongodb= require('./mongodb')

const del = async ()=>{
    const data= await mongodb();
    console.log(data);
    const result=await data.deleteMany({name: 'max 5 pro'});
    
    console.log(result)
}

del();