const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Product = require("../model/product.model.js");
const cart = require("../model/cart.model.js");

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

router.get("/home", async (req, res) => {
  try {
    const products = await Product.find();
    const cartItems = await cart.find();
    products
      ? res.status(200).json(products)
      : res.status(404).json({ message: "No products found" });
    cartItems
      ? res.status(200).json(cartItems)
      : res.status(404).json({ message: "cart is empty" });
  } catch (error) {}
});

module.exports = router;

/* 
post 

for uploade porducts
*/

router.post("/upload", single("productimg"), async (req, res) => {
  try {
    const product = new Product({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      pimg: req.file.filename,
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

router.post("/addtocart", async (req, res) => {
  try {
    const product = await Product.findById(req.params._id);
    const cart = await cart.findOne({ user: req.user._id });
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
      }
    }
  } catch (error) {
    res.status(400).json({ message: "product add to cart failed" });
  }
});
