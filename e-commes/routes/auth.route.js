const Register = require('../model/register.model.js')
const express = require('express')
const router = express.Router();




/* 
post 
for register user
 */

router.post('/register', async (req , res)=>{
    const {name , email , phone , password} = req.body;
    try {
        if(!name || !email || !phone || !password){
            return res.status(400).json({message : "Please fill all the fields" })
        }
       const checkUserExist = await Register.findOne({email})
       if(checkUserExist){
        return res.status(400).json({message:"user is already exist" })
       }
       const user = new Register({
        name,
        email,
        phone,
        password
       });
       const result = await user.save();
       res.status(200).json({message:"User Registered Successfully", result})
    } catch (error) {
        res.status(500).json({message : "Internal Server Error" })
        }
});

export default router ;