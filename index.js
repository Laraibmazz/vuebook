const express = require('express')
const app = express()
var port = process.env.PORT || 8080

app.use('/a',
    express.static('dist')
)

app.listen(port)