const route  = require('express').Router();
const UserLogin = require("./auth/UserLogin")
const UserSignUp = require("./auth/UserSignUp");
const addProducts = require("./products/addProducts")
const deleteProducts = require("./products/deleteProduct")
const updateProducts = require("./products/updateProducts")
const allProducts  = require("./products/allProducts")
const createOrders = require("./orders/createOrder")
const  getOrders = require("./orders/getOrders")
const userOrders = require("./orders/userOrders") 
const orderDetails = require('./orders/orderDetails')


const product = require("../models/products")



route.get("/",(req,res)=>{
        res.send("very")
})
route.post('/user/signup',UserSignUp);
route.post('/user/login',UserLogin);
route.post('/admin/addProducts',addProducts);
route.post('/admin/deleteProducts',deleteProducts);
route.post('/admin/updateProducts',updateProducts);
route.post('/admin/allProducts',allProducts);
route.post('/buy',createOrders);
route.post('/admin/Orders',getOrders);
route.post('/userOrders',userOrders);
route.post('/OrderDetails',orderDetails);



module.exports = route; 