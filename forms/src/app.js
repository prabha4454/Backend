const express=require ('express');
const app= express()
const port=process.env.PORT || 5000
const bodyParser=require ('body-parser')
const mongoosDb = require('../lib/DB/form.db.js')
const cors = require ('cors')


/* database */
mongoosDb()


app.use(cors())

/* middleware */
app.use(bodyParser.json())
app.use("/uploads", express.static("uploads"));

app.use('/',require('../routes/form.route.js'))


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})