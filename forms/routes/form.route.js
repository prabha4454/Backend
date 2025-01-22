const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Form1 = require ('../model/form.schema.js')


router.post('/submit' , async(req,res) => {
    const {name , email , age,gender,phone} = req.body;
    const user = new Form1({
        name ,
        age,
        gender,
        email ,
        phone
    
        });
        try {
            const savedUser = await user.save();
            res.json(savedUser);
            } catch (err) {
                res.status(400).json({ message: err.message });

            }

})

module.exports = router;