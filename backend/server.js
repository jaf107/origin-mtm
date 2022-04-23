const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const connectDB = require('./database')

const api = require('./routes/auth.routes')
const url = 'mongodb+srv://originmtm:originmtm@cluster0.knfvs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const localurl = 'mongodb://127.0.0.1:27017/mydatabase';

// Connecting with mongo db
connectDB();

const user = require('./routes/auth.routes')
const game = require('../backend/routes/game.route')
const app = express()
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)
app.use(cors())
app.use('/api', game)

app.use('/public', express.static('public'))
app.use('/api', user)
// Create port
const port = process.env.PORT || 4000
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})
// Find 404 and hand over to error handler
app.use((req, res, next) => {
  next(createError(404))
})
// error handler
app.use(function (err, req, res, next) {
  console.error(err.message) // Log error message in our server's console
  if (!err.statusCode) err.statusCode = 500 // If err has no specified error code, set error code to 'Internal Server Error (500)'
  res.status(err.statusCode).send(err.message) // All HTTP requests must have a response, so let's send back an error with its status code and message
})