const express = require('express');

const app = express.Router()

app.use('/index', express.static('index.html'))
app.use('/css', express.static('style.css'))

app.use('/andex', (req, res) => {
    res.send('json is on andex')
})


module.exports = app