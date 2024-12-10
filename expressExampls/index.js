const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// GET all items and display in Jade
router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.render('index', { title: 'Items List', items });
    } catch (err) {
        res.status(500).send('Error fetching items');
    }
});

// Add a new item
router.post('/add', async (req, res) => {
  const newItem = new Item({
      name: req.body.name,
      description: req.body.description,
  });
  try {
      await newItem.save();
      res.redirect('/');
  } catch (err) {
      res.status(500).send('Error saving item');
  }
});

// Update an item
router.post('/edit/:id', async (req, res) => {
  try {
      await Item.findByIdAndUpdate(req.params.id, {
          name: req.body.name,
          description: req.body.description,
      });
      res.redirect('/');
  } catch (err) {
      res.status(500).send('Error updating item');
  }
});

// Delete an item
router.post('/delete/:id', async (req, res) => {
  try {
      await Item.findByIdAndDelete(req.params.id);
      res.redirect('/');
  } catch (err) {
      res.status(500).send('Error deleting item');
  }
});


module.exports = router;
