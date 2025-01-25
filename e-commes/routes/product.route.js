const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require ('../model/product.model.js');
const cart = require ('../model/cart.model.js');

/* 
Get 
all products and cart items
 */

router.get('/home', async (req , res )=>{

    try {
        const products = await Product.find();
        const cartItems = await cart.find();
products? res.status(200).json(products) : res.status(404).json({message: 'No products found'});
cartItems? res.status(200).json(cartItems) : res.status(404).json({message: 'cart is empty'});

    } catch (error) {
        
    }
})


module.exports = router;