const product = require("../../models/products");


const AllProducts = async (req, res) => {

    let filter = req.body ? req.body.filter : { };
    
    
    try {

        let data = await product.find(filter)


        res.status(200).send(data)
    } catch (error) {
            res.status(400).send(err)
    }
}

module.exports = AllProducts