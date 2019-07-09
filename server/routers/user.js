const express = require('express')
const multer = require('multer')
const sharp = require('sharp')
const { sendWelcomeEmail, sendCancelationEmail } = require('../emails/account')


const User = require('../models/user')
require('../db/mongoose')



// Middlewares
const auth = require('../middleware/auth')

// Router declaration
const router = new express.Router()



// Get my profile
router.get('/users/me', auth, async (req, res) => {
    try {
        res.send(req.user)
    } catch (e) {
        res.status(400).send()
    }
})


// Auth routes
// ->
// Register user
router.post('/auth/register', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken(res)

        res.status(201).send({ success: true, user, token })
    } catch (e) {
        const error = e.message
        res.status(200).send({ success: false, error })
    }
})

// Login user
router.post('/auth/login', async (req, res) => {
    try {
        if (!req.body.email || !req.body.password) {
            return res.status(200).send({ message: 'Missing arguments.' })
        }

        let user = null
        if (req.body.name) {
            user = await User.findOne({ name: req.body.name })
        } else if (req.body.email) {
            user = await User.findOne({ email: req.body.email })
        }

        if (!user) {
            throw new Error('User not found.')
        }

        const valid = await user.checkCredentials(req.body.password, user.password)

        if (valid !== true) {
            throw new Error('Bad password or email.')
        }

        const token = await user.generateAuthToken(res)

        res.status(201).send({ success: true, user, token })
    } catch (e) {
        const error = e.message
        res.status(200).send({ success: false, error })
    }
})

// Validate user
router.get('/auth/fetch', auth, async (req, res) => {
    try {
        res.send({ success: true, user: req.user, token: req.token })
    } catch (e) {
        const error = e.message
        res.status(400).send({ success: false, error })
    }
})

// Logout user
router.get('/auth/logout', auth, async (req, res) => {
    try {
        // Clear cookies
        res.clearCookie('x-hp', { path: '/' })
        res.clearCookie('x-s', { path: '/' })

        // Clear token in bdd
        let tokens = req.user.tokens.filter((token => !bcrypt.compareSync(req.random, token.token)))
        req.user.tokens = tokens
        await req.user.save()

        res.send({ success: true })
    } catch (e) {
        // Clear cookies
        res.clearCookie('x-hp', { path: '/' })
        res.clearCookie('x-s', { path: '/' })

        const error = e.message
        res.status(400).send({ success: true, error })
    }
})

// Logout user
router.get('/auth/logout', auth, async (req, res) => {
    try {
        // Clear cookies
        res.clearCookie('x-hp', { path: '/' })
        res.clearCookie('x-s', { path: '/' })

        // Clear token in bdd
        let tokens = req.user.tokens.filter((token => !bcrypt.compareSync(req.random, token.token)))
        req.user.tokens = tokens
        await req.user.save()

        res.send({ success: true })
    } catch (e) {
        // Clear cookies
        res.clearCookie('x-hp', { path: '/' })
        res.clearCookie('x-s', { path: '/' })

        const error = e.message
        res.status(400).send({ success: true, error })
    }
})

// Update User
router.patch('/users/me', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates !' })
    }

    try {
        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()

        res.send(req.user)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Delete user
router.delete('/users/me', auth, async (req, res) => {
    try {
        await req.user.remove()
        sendCancelationEmail(req.user.email, req.user.name)

        res.send(req.user)
    } catch (e) {
        res.status(500).send()
    }
})


const upload = multer({
    limits: {
        fileSize: 1000000,
    },
    fileFilter(req, file, callback) {
        if (!file.originalname.match(/\.(jpg|png|jpeg)$/)) {
            return callback(new Error('File must be an image'))
        }

        callback(undefined, true)
    }
})

// Upload avatar
router.post('/users/me/avatar', auth, upload.single('avatar'), async (req, res) => {
    const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer()
    req.user.avatar = buffer
    await req.user.save()

    res.send()
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})

// Delete avatar
router.delete('/users/me/avatar', auth, async (req, res) => {
    req.user.avatar = undefined
    await req.user.save()

    res.send()
})

// Fetch avatar
router.get('/users/:id/avatar', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)

        if (!user || !user.avatar) {
            throw new Error()
        }

        res.set('Content-Type', 'image/png')
        res.send(user.avatar)
    } catch (e) {
        res.status(404).send()
    }
})


// Export
module.exports = router