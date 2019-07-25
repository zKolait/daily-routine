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
            return res.status(200).send({ message: 'Arguments non complets.' })
        }

        let user = null
        if (req.body.name) {
            user = await User.findOne({ name: req.body.name })
        } else if (req.body.email) {
            user = await User.findOne({ email: req.body.email })
        }

        if (!user) {
            throw new Error('Mauvais mot de passe ou email.')
        }

        const valid = await user.checkCredentials(req.body.password, user.password)

        if (valid !== true) {
            throw new Error('Mauvais mot de passe ou email.')
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
        res.status(200).send({ success: false, error })
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


// Set day value
router.post('/users/stats', auth, async (req, res) => {
    try {
        if (!req.body.value) {
            throw new Error()
        }

        var now = new Date()
        var start = new Date(now.getFullYear(), 0, 0)
        var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000)
        var oneDay = 1000 * 60 * 60 * 24
        var dayOfTheYear = Math.floor(diff / oneDay)
        let date = new Date().getFullYear() + '' + dayOfTheYear
        
        let day = {
            value: req.body.value,
            time: date
        }

        let stats = []
        if (req.user.stats.length > 0) {
            req.user.stats.forEach((day) => {
                stats.push(day.toJSON())
            })
        }

        let doubleIndex = null
        if (stats.length > 0) {
            doubleIndex = await stats.findIndex((day) => day.day.time == date)
        }

        if (doubleIndex !== -1) {
            stats[doubleIndex].day.value = day.value
            await req.user.updateOne(
                {
                    $set: {
                        stats
                    }
                }
            ) 
        } else {
            if (stats.length < 1) {
                stats = [{
                    day
                }]
            } else {
                stats.push(
                    {
                        day
                    }
                )
            }

            await req.user.updateOne(
                {
                    $set: {
                        stats
                    }
                }
            ) 
        }

        req.user.save()

        res.status(200).send({ success: true, day })
    }
    catch (e) {
        res.status(200).send({ error: `Impossible d'ajouter les données.`, success: false })
    }
})



router.get('/users/stats', auth, async (req, res) => {
    try {
        let stats = []
        if (req.user.stats.length > 0) {
            req.user.stats.forEach((day) => {
                stats.push(day.toJSON())
            })
        } else {
            res.status(200).send({ success: true, stats: null })
        }

        var now = new Date()
        var start = new Date(now.getFullYear(), 0, 0)
        var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000)
        var oneDay = 1000 * 60 * 60 * 24
        var dayOfTheYear = Math.floor(diff / oneDay)
        let today = new Date().getFullYear() + '' + dayOfTheYear

        let filteredStats = stats.filter((day) => (today - day.day.time) < 30)

        maxIndex = parseInt(today) - parseInt(filteredStats[0].day.time)
        maxValue = filteredStats[filteredStats.length - 1].day.time

        let filledStats = []
        let i = 30
        while (i > 0) {
            filledStats[i] = [{
                time: maxValue - i,
                value: 0,
            }]
            i--
        }

        for (let index = 0; index < filteredStats.length; index++) {
            filledStats[maxValue - filteredStats[index].day.time] = [{
                time: parseInt(filteredStats[index].day.time), 
                value: parseInt(filteredStats[index].day.value)
            }]
        }

        reversedStats = filledStats.reverse()

        res.status(200).send({ success: true, stats: reversedStats })
    } catch (e) {
        res.status(200).send({ error: `Impossible de récupérer les données.`, success: false })
    }
})



// Export
module.exports = router