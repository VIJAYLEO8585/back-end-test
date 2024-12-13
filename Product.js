const { Schema, mongoose  }=require('mongoose');
const productSchema =new Schema(
    {
ProductID :{type:Number, unique:true},
ProductName:{type:String ,required:true},
ProductPrice:{type:Number,min:0},
ProductCategory:{type:String,required:true},
ProductStock:{type:Number,min:0}

})
const Product = mongoose.model('Product',productSchema)
module.exports = Product;
