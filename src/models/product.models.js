import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    image: String,
    brand: String,
    model: String,
    price: Number,
    ram: String,
    cpu: String,
    vga: String,
    storage: String,
    resolution: String,
    countInStock: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
    // Reviews will be added later
}, { timestamps: true })

const Product = mongoose.model('Product', productSchema)

export default Product