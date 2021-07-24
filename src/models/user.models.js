import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    isAdmin: {
        type: String,
        default: false
    }
}, { timestamps: true })

const User = mongoose.model('User', userSchema)

export default User