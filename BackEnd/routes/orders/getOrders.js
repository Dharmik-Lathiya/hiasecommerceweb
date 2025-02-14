const OrderSchema = require("../../models/ordes");
const product = require("../../models/products");

const getOrders = async (req,res)=>{

    try {
    
            let orders = await OrderSchema.find({})
            let products = [];
            let i = 0;
            
            for(let node of orders){
                console.log({...node._doc});
                
                // products.push(...await product.find({_id:node.products}));
                orders[i] = {...node._doc , Orderdproducts:[...await product.find({_id:node.products})]}
                i++;

            }
            
            
    
            res.status(200).send(orders)
        } catch (err) {
                res.status(400).send(err)
        }
}

module.exports = getOrders;