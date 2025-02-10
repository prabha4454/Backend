const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const connectDb = require ('../lib/DB/ecommes.db.js')
const path = require('path')

/* to connect database */

connectDb()

/* internel middleware */

app.use(cors());
app.use(bodyParser.json());



    app.use("/uploads",express.static((path.join(__dirname,'..', 'uploads'))));
   


/* app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); */

/* routing middleware */

app.use('/', require('../routes/product.route.js'));
app.use("/api/auth",require("../routes/auth.route.js"))



/* port */

app.listen( port ,()=>{
    console.log(`server is running on port ${port}`);
});
