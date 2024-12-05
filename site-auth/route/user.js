const express=require("express");
const router=express.Router();
const mongoose=require("mongoose");
const userD=require('../model/UserDetails');
const path=require('path')

router.route('/rl')
.post(async(req,res,next)=>{
    try{
        const newUser= new userD({
            name:req.body.name,
            uname:req.body.uname,
            password:req.body.password
        })
        const savedUser= await newUser.save();
        res.send('Registered Sucessfully')
    }
    catch(err){
        res.status(400).json({message:err.message})
    }

})
.get(async(req,res)=>{
    try{
        const query={uname:req.body.uname,password:req,body,password};
        const user=await userD.findOne(query);
        if (user){
            res.sendFile(path.join(__dirname,'..','dashbord.html'))
        }
        else(
            res.send('Invalid Credentials')
        )
        
    }
    catch(err){
          res.status(400).send(err)  
    }
})
module.exports=router;