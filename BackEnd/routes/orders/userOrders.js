const OrderSchema = require("../../models/ordes");
const UserSchema = require("../../models/UserSchema")
const product = require("../../models/products");


const userOrders = async (req,res)=>{


        let user = await UserSchema.findById(req.body.userId);
        let orders = await OrderSchema.find({_id:{$in: user.order}})
        let  i = 0

        if(orders){

            for(let node of orders){
                 orders[i] = {...node._doc , products:[...await product.find({_id:node.products})]}
                 i++;
                

            }
            return res.status(200).send({sucsess:true,orders:orders})
        }




}
module.exports = userOrders