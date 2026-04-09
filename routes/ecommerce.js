const express = require('express')
const router = express.Router();

let products = [];
let cart = [];

router.get("/", (req, res) => {
    res.json(products);
})

router.post("/", (req, res) => {
    const newproduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    }

    products.push(newproduct)
    res.json(newproduct)
})

router.get("/:id", (req, res) => {
    const product = products.find(p => p.id == req.params.id)
    res.json(product)
})

router.delete("/:id", (req, res) => {
    products = products.filter(p => p.id != req.params.id)
    res.json("message");
})

router.get("/cart", (req, res) => {
    res.json(cart)
})

router.post("/cart", (req, res) => {
    const item = {
        productId: req.body.productId,
        quantity: req.body.quantity
    }
    cart.push(item);
    res.json(item)
})
module.exports = router;
