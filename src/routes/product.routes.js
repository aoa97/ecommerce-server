import express from 'express'
import Product from '../models/product.models.js'

const router = new express.Router()

// Get Products 
router.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.send(products)
})

// Create Product
router.post('/products', async (req, res) => {
    const product = new Product(req.body)
    await product.save()
    res.status(201).send()
})

export default router
