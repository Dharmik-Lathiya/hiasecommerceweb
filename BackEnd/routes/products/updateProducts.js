const product = require("../../models/products");




const updateProducts = async (req,res)=>{
    console.log(req.body.update);
    


     let data = await product.findByIdAndUpdate(req.body.update._id,req.body.update).then(()=>{
        res.status(200).send({msg:"SuccessFully updated"})
     }).catch((err)=>res.status(400).send(err))
    
}

module.exports = updateProducts