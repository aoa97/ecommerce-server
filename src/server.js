import express from 'express'
import dotenv from 'dotenv'

import connectDB from './db.js'
import productRoutes from './routes/product.routes.js'


dotenv.config()
connectDB()
const app = express()

app.use(express.json())
app.use(productRoutes)

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port} ..`);
})