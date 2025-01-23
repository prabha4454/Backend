const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Form1 = require ('../model/form.schema.js')


router.post('/submit' , async(req,res) => {
    
    const user = new Form1({
        name:req.body.fname +req.body.lname,
        dob:req.body.dob,
        gender:req.body.gender,
        email:req.body.email ,
        phone:req.body.phone
    
        } );
        try {
            const savedUser = await user.save();
            console.log('Form submitted');
          res.status(201).json({
            message: 'Form submitted successfully',
            
            data: savedUser
          });
         
            } catch (err) {
                res.status(400).json({ message: err.message });
                console.log(err)

            }

})

module.exports = router;