import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
    isAdmin: {
        type: Boolean,
        default: false
    },
}, { timestamps: true })

// Hash password before storing it in the DB    
userSchema.pre('save', async function (req, res, next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10)
    }
    next()
})

const User = mongoose.model('User', userSchema)

export default User