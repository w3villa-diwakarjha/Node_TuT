const mongodb=require('./mongodb')

const update=async ()=>{
    const data=await mongodb();
    const updatedata=await data.updateMany({name: 'note 5'},{$set: {name: 'max 5 pro'}})
    console.log(updatedata);
}
update();