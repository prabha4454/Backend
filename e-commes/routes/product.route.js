const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Product = require("../model/product.model.js");
const Cart = require("../model/cart.model.js");
const path = require("path");
const fs = require("fs");

/* 
//multer file uploade config
 */
const multer = require("multer");
const { title } = require("process");

const storeFile = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storeFile });

/* 
Get 
all products and cart items
 */

router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    
    products
      ? res.status(200).json(products)
      : res.status(404).json({ message: "No products found" });
   
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Error fetching products", error });
  }
});


/* 
for cart */

router.get("/cart", async (req, res) => {
  try {
    const cartItems= await Cart.find();
    cartItems
    ? res.status(200).json(cartItems)
    : res.status(404).json({ message: "cart is empty" });}
    catch (error) {
      console.log(error)
      res.status(500).json({
        message:error
      })
    }
    });




/* 
post 

for uploade porducts
*/

router.post("/upload", upload.single('pimg'), async (req, res) => {
  try {
    const product = new Product({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      pimg: req.file ?`/uploads/${req.file.filename}`: null
    });
    await product.save();
    console.log("product is added ");
    res.status(201).json({ message: "product uploaded successfully" });
  } catch (error) {
    res.status(400).json({ message: "product upload failed" });
  }
});

/* 
post 
add to cart
 */

router.post("/addToCart/:_id", async (req, res) => {

  try {
    const product = await Product.findById(req.params._id);
    console.log(product)
    console.log(req.params._id)
console.log('hellow')
    const newcart = new Cart({
     pimg : product.pimg,
     name: product.name,
     price: product.price,
    });
    const cart = await newcart.save();
    console.log('product is added to cart')
    res.status(201).json({ 
      message: "product added to cart",
     });
    /* const cart = await cart.findOne({ user: req.user._id });
    if (!cart) {
      const newcart = new cart({
        user: req.user._id,
        products: [product],
      });
      await newcart.save();
      res.status(201).json({ message: "product added to cart" });
    } else {
      const index = cart.products.findIndex((item) => item.equals(product._id));
      if (index === -1) {
        cart.products.push(product);
        await cart.save();
        res.status(201).json({ message: "product added to cart" });
      } else {
        res.status(400).json({ message: "product already in cart" });
      } */
  
  } catch (error) {
    res.status(400).json({ message: "product add to cart failed",error });
    console.log(error)
  }
});


/* 
DELETE
for deleting products */

router.delete('/product/:_id', async (req,res) =>{
  try {
    const product = await Product.findById(req.params.id);
    const filePath =product.pimg
    fs.unlink( filePath, (err) => {
      if (err) {
        console.error(err.message)
        }
        else{
          console.log("product img  is deleted")
        }
        });
        
await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({message: "product deleted"})

  } catch (error) {
    res.status(400).json({
      message:"error deleting the product",
      error:error.message
    });
    console.log(error.message)
  }
});
 

/* 
DELETE
for deleting cart items
 */

router.delete('/cart/:_id', async (req,res) =>{
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json({message: "product deleted"})

  } catch (error) {
    res.status(400).json({
      message:"error deleting the product",
      error:error.message
    });
    console.log(error)
  }
});

/* 
UPDATE

for edit product
*/

router.post('/edit/:_id', async (req,res) =>{
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, 
      {
       name : req.body.name,
       price : req.body.price,
       description : req.body.description,
       pimg:req.file.name

      });
    res.status(200).json({message: "product updated"})
    } catch (error) {
      res.status(400).json({
        message:"error updating the product",
        error:error.message
       });
       console.log(error)
       }
       });



module.exports = router;