const express=require('express')
const app=express()
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const port=4000;
const cors=require('cors');
const path=require('path')

//middleware

app.use(bodyparser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/userDetails',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("connected to database")
})
.catch(err=>{console.log('Error:'+err)})
app.get('/auth',(req,res)=>{
    res.sendFile(path.join(__dirname,'login.html'))
})
app.use('/auth',require('./route/user'));
app.listen(port,()=>{
    console.log('server is running on port'+port)
})