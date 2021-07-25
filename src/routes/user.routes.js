import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/user.models.js'

const router = new express.Router()

router.post('/users/register', async (req, res) => {
    const exist = await User.findOne({ email: req.body.email })

    if (exist) {
        res.status(400).send("User already exists") // Bad request
    }

    const user = new User(req.body)

    await user.save()
    res.status(201).send()
})

router.post('/users/login', async (req, res) => {
    
    // E-mail validaton
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
        res.status(400).send("Invalid email or password")
        return
    }   

    // Password validation
    const isMatch = await bcrypt.compare(req.body.password, user.password)
    if (!isMatch) {
        res.status(400).send("Invalid email or password")
        return
    }

    // E-mail & Password are correct -> Generate auth token
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET, { expiresIn: '7d' })
    res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        phone : user.phone,
        isAdmin: user.isAdmin,
        token
    })
})

export default router
