const OrderSchema = require("../../models/ordes");
const productSchema = require("../../models/products");
const UserSchema = require("../../models/UserSchema")
const createOrders = async (req,res)=>  {

        console.log(req.body);
        
        let total = 0;
        let i = 0;
        
        
        let data = await productSchema.find({_id:{$in:req.body.products}})
        
            
        
        for(let node of data){
             total += (node.price * req.body.quantity[i]);
             await productSchema.findByIdAndUpdate(node._id,{orders : node.orders ? node.orders+ 1 : 1})
            i++;
        }

        const newOrder = new OrderSchema({...req.body,total:total})
        
        const order = await newOrder.save();
        if(order){
            await UserSchema.findByIdAndUpdate(req.body.userId,{$push:{order:order._id}}).then(()=>{

                return res.status(200).send({
                    success:true,
                    message:"done",
                    
                })

            })
            
         }else{
             
             return res.status(400).send({success:false,err:"something went wrong"})
         }

}

module.exports = createOrders;