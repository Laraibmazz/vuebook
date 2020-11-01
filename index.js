const express = require('express')
const app = express()
var port = process.env.PORT || 3000

app.use('/:channel/:vid', (req, res) => {
    res.send(`HEllo`)
})

app.listen(port)