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

/* 
get
for get user
 */


router.get('/user', async (req, res) => {
   
    try {
        const users = await Form1.find();
        res.status(200).json(users);
        } catch (err) {
            res.status(404).json({ message: err.message });
            }
            }
        )


        /* 
        put
        
        to update the details
        */

        router.put('/user/:id', async (req,res)=>{

            try {
                await Form1.findByIdAndUpdate(req.body._id ,{
                  

                })
            } catch (error) {
                
            }
        })

module.exports = router;