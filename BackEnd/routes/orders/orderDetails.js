const OrderSchema = require("../../models/ordes");

const orderDetails = async (req, res) => {

    console.log(req.body.year);

    let orders = await OrderSchema.find({});
    let months = [];
    let total = 0;
    let count = 0;
    let i = 0;
    const startMonth = 1;
    const endMonth = 12;

    for (let node of orders) {

        const dateObj = new Date(node._doc.date);
        const day = new Date().getDate();
        const year = dateObj.getUTCFullYear();
        const month = dateObj.getUTCMonth() + 1; 
        const date = dateObj.getUTCDate();

        

        
        if(req.body.year == year){
            
            months.push(month);

        }        

        if(date == day){
            count++
        }
        
        total += node._doc.total;
        i++;

    }

    
    const monthCounts = months.reduce((acc, month) => {
        acc[month] = (acc[month] || 0) + 1; // Count occurrences
        return acc;
      }, {});

      const result = Array.from({ length: endMonth - startMonth + 1 }, (_, i) => {
        const month = startMonth + i;
        return { month, count: monthCounts[month] || 0 };
    });
    res.status(200).send({ totalIncome: total, totalOrder: orders.length ,chartData:result,todayOrder:count})


}

module.exports = orderDetails