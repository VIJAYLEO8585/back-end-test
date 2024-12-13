const express =require('express')
// const Product =require('../models/Product')
const router =express.Router();
router.post('/addProduct',(req,res)=>{
    console.log(req.body)
   const {ProductID,ProductName,ProductPrice,ProductCategory,ProductStock}=req.body;
   const newProduct =new Product({ProductID,ProductName,ProductPrice,ProductCategory,ProductStock});
   newProduct.save()
    .then(()=>res.send('Product Added Successfully'))
    .catch((error)=>res.send(error))
})
module.exports =router;