// Requires
const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const randomatic = require('randomatic')
const Task = require('./task')

// Models
// ->
// Users model
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password needs to be more secure...')
            }
        }
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid.')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number.')
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    avatar: {
        type: Buffer
    }
}, {
    timestamps: true
})

userSchema.virtual('tasks', {
    ref: 'Task',
    localField: '_id',
    foreignField: 'owner'
})

// Find by Credentials
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })

    if (!user) {
        throw new Error({ message: 'Unable to login' })
    }

    let isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error({ message: 'Unable to login' })
    }

    return user
}

// Get public profile
userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens
    delete userObject.avatar

    return userObject
}

// Generate auth token
userSchema.methods.generateAuthToken = async function (res) {
    let user = this

    // Generate random
    let random = await randomatic('aA0', 16)

    // Generating token
    const signOptions = {
        expiresIn: "7 days",
        algorithm: "RS256"
    }

    const PRIVATE_KEY = process.env.PRIVATE_KEY.replace(/\\n/g, '\n')
    let token = await jwt.sign({ _id: user._id.toString(), random }, PRIVATE_KEY, signOptions)

    // Adding random token to db
    random = bcrypt.hashSync(random, 8)
    user.tokens = user.tokens.concat({
        token: random
    })

    // Save user
    await user.save()

    let splitToken = token.toString().split('.')
    const tokenPayload = splitToken[0] + '.' + splitToken[1]
    const tokenSignature = splitToken[2]

    // Generate cookies
    res.cookie('x-hp', tokenPayload, { sameSite: true, httpOnly: false, secure: false, maxAge: 1000 * 60 * 60 * 2 })
    res.cookie('x-s', tokenSignature, { sameSite: true, httpOnly: true, secure: false })

    // Return token
    return token
}



// Pre save user
userSchema.pre('save', async function (next) {
    let user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

userSchema.methods.checkCredentials = async function (password, dbPassword) {
    const valid = bcrypt.compareSync(password, dbPassword)

    return valid
}

// Cascade delete tasks when user is deleted
userSchema.pre('remove', async function (next) {
    const user = this

    await Task.deleteMany({ owner: user._id })

    next()
})



const User = mongoose.model('User', userSchema)
// Exports
module.exports = User