const mongoose=require('mongoose')

const userDetails= new mongoose.Schema({
    name:{type:String, required:true},
    uname:{type:String, required:true},
    password:{type:String, required:true}
});
module.exports=mongoose.model('userD',userDetails);