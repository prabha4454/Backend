const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const connectDb = require ('../lib/DB/ecommes.db.js')

/* to connect database */

connectDb()

/* internel middleware */

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/* routing middleware */

app.use('/', require('../routes/product.route.js'));


/* port */

app.listen( port ,()=>{
    console.log(`server is running on port ${port}`);
});
