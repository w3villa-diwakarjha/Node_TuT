const mongoose= require('mongoose')

mongoose.connect('mongodb://localhost:27017/e-comm')

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    // category: String
})

const saveInDB=async ()=>{
    const productModel = mongoose.model('products',productSchema);
    let data= new productModel({
        name: 'max 100',
        price: 200,
        brand: 'maxx',
        category: 'mobile'
    })
    const result = await data.save();
    console.log(result);
}

const updateInDB=async ()=>{
    const productModel=mongoose.model('products',productSchema);
    let data= await productModel.updateOne(
        {name: "Note Pro"},
        {$set: {price: 700, name: 'max 8'}}
    )
    console.log(data)
}
const deleteInDB=async ()=>{
    const productModel=mongoose.model('products',productSchema);
    let data=await productModel.deleteOne({name: 'max 8'})
    console.log(data)
}

const findInDB= async()=>{
    const productModel=mongoose.model('products',productSchema);
    let data=await productModel.find();
    console.log(data);
}
// saveInDB()
// updateInDB();
// deleteInDB();
findInDB();