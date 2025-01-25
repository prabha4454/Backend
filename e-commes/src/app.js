const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;

/* internel middleware */

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/* routing middleware */

app.use('/',)


/* port */

app.listen( port ,()=>{
    console.log(`server is running on port ${port}`);
});
