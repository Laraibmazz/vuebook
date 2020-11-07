const express = require('express');

const app = express()

app.use('/index/:id', function (req, res) {
    res.send(`{i: ${req.params.id}}`)
})


module.exports = app;