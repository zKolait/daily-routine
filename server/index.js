const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.SERVER_PORT

// CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH, OPTIONS")
    res.header("Access-Control-Allow-Credentials", "true")

    if (req.method === "OPTIONS") {
        return res.status(200).end()
    }

    next();
});

// Accept json requests
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

// Routes
app.use(userRouter)
app.use(taskRouter)


// Listen server
app.listen(port, () => {
    console.log('Server is up on port: ' + port)
})