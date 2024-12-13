const express =require('express')
const mongoose=require('mongoose')
const Product = require('./models/Product');
const ProductRoutes =require('./routes/ProductRoutes')
const app=express()
const port =3005;
mongoose.connect('mongodb://localhost:27017/productsDB')
.then(()=>console.log('Connected to DB'))
.catch((err)=>console.log(err))
app.use(express.json())
app.listen(port,(err)=>{
    if(!err){
        console.log('Server is Connected to port no',port)
    }else{
        console.log(err)
    }
})
const newProduct = new Product({ProductID :1,ProductName:"one plus mobile",ProductPrice:299.99,ProductCategory:"Electronics",ProductStock:150})
newProduct.save()
.then(()=> console.log('USER ADDED '))
.catch((error)=>console.log(error))