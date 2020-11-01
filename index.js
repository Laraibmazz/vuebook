const express = require('express')
const app = express()
var port = process.env.PORT || 8080

app.use('/',
    express.static('dist')
)

app.use('/:channel', (req, res) => {
    res.send(`This is channel: ${req.params.channel}`)
})

app.use('/',
    express.static('dist')
)

app.use('/',
    express.static('dist')
)

app.listen(port)