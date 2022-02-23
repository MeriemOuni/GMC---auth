console.clear()
// require express
const express = require("express");

// create instance
const app = express()

// cors
const cors = require("cors");
app.use(cors())

// require dotenv
require("dotenv").config()

// connection DB
const connectDB = require('./config/connectDB');
connectDB();

// Routing
// middleware global
app.use(express.json())

// middleeware route
app.use("/api/user", require("./router/user"))

// create PORT 
const PORT = process.env.PORT

// create server
app.listen(PORT, (err) => err 
    ? console.error(err)
    : console.log(`Server is ranning on port ${PORT} ..`)
)