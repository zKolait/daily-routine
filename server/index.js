const express = require('express')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.SERVER_PORT

// Accept json requests
app.use(express.json())

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

// Routes
app.use(userRouter)
app.use(taskRouter)


// Listen server
app.listen(port, () => {
    console.log('Server is up on port: ' + port)
})