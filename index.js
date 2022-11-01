require('dotenv').config()

var createError = require('http-errors')
var express = require('express')
var path = require('path')

var app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
    // 404 Not Found.
    if (err.status === 404) {
      return res
        .status(404)
    }
    
    return res.status(err.status || 500)
})

app.use()

// Start listening.
app.listen(3000, async () => {
    console.log('Server started on http://localhost:3000')
    console.log('Press Ctrl-C to terminate...')
})

module.exports = app