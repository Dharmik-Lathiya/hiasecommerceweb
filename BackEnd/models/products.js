const mongoose = require('mongoose');
const validator = require('validator');



const ProductsSchema = new mongoose.Schema({


    name: {
        type: String,
        required: [true, 'Name is required'],
      },
      desc:{
        type:String,
        required:[true , 'desciption is required']

      },
      price:{
        type:Number,
        required:[true , 'price is required']
      },
      discount:{
        type:Number
      },
      imgUrl:[{
        type:String,
        required:[true , 'Url is required'],
       
      }],
      stock:{
        type:Number
      },
      orders:{
        type:Number
      },
      category:{
        type:String
      },
       

});


module.exports = mongoose.model('products', ProductsSchema);
