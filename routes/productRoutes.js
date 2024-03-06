const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");

// Example route to get all products
router.get("/products", async (req, res) => {
  try {
    const products = await Product.findAll();
    console.log("called");
    res.json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Example route to add a product
router.post("/products", async (req, res) => {
  try {
    let info = {
        // image: req.file.path,
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }    

    const product = await Product.create(info)
    res.status(200).send(product)
    console.log(product)
  } catch (err) {
    console.error("Error creating products:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});


module.exports = router;
