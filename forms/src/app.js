const express=require ('express');
const app= express()
const port=process.env.PORT || 5000
const bodyParser=require ('body-parser')
const mongoosDb = require('../lib/DB/form.db.js')
const cors = require ('cors')

app.use(cors())


/* database */
mongoosDb()

/* middleware */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/submit',require('../routes/form.route.js'))


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})