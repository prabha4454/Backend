const mongoose=require('mongoose');

const itemSchema= new mongoose.Schema({
    uname:String,
    password:String
})

module.exports=mongoose.model('User',itemSchema)