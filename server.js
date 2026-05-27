const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const PORT = process.env.PORT || 7000

// ... For Heroku: other imports 
const path = require("path")

// Middleware
app.use(express.json())
app.use(morgan('dev'))
// ... For Heroku: other app.use middleware 
app.use(express.static(path.join(__dirname, "client", "build")))


// Routes
app.use("/bounty/v1", require ('./routes/bountyRoutes.js'))

// DB Connection (useNewUrlParser removed — no longer needed in Mongoose 8+)
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/bountyhunter")
    .then(() => console.log('[o] Connected to the DB'))
    .catch(err => console.error('[!] DB connection error:', err))

// ... For Heroku
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
})

// Listener
app.listen(PORT, () => {
    console.log(`[+] Server is running on port ${PORT}`)
})
