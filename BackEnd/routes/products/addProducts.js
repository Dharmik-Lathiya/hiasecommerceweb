const product = require("../../models/products");


const addProducts = async (req,res)=>{

    


     await product.validate(req.body).then(()=>{

        

        const NewProducts = new product(req.body);

        NewProducts.save().then(()=>{
            res.status(200).send({
                success:true,
                message:"done"
            })
            
        }).catch((err) => {
            res.status(400).send({success:false,message:err})
        });


     }).catch((err)=>{
        res.status(400).send({success:false,message:err})
        
     })



}

module.exports = addProducts