import express from 'express'
import products from './assets/data/productData.js'

const app = express()

// Get Products 
app.get('/products', (req, res) => {
    res.send(products)
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port} ..`);
})