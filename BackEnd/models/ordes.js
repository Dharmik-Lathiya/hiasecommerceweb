const mongoose = require('mongoose');
const validator = require('validator');



const OrderSchema = new mongoose.Schema({


    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    location: {
        type: String,
        required: [true, 'location is required']

    },
    total: {
        type: Number,
    },
    products: [
        {
            type: String,
        }
    ],
    date: {
        type: Date,
        required: [true, 'Date is required']

    },
    quantity:[{
        type:Number,
        required: [true, 'quantity is required']

    }]
    



});


module.exports = mongoose.model('order', OrderSchema);

