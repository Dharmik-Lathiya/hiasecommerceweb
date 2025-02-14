const express = require("express");
const app = express();
const route = require('./routes/routes');
const cors = require("cors")
const bodyParser = require("body-parser");



require('./Database/dbconnection')


app.use(cors());
app.use(bodyParser.urlencoded({ limit: '50mb',extended:false, parameterLimit: 50000}))
app.use(bodyParser.json({ limit: '50mb' }));
app.use('/',route);

app.listen(3000,()=>{

})
