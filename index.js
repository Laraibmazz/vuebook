var express = require('express')

var app = express()
var PORT = process.env.PORT || 3000

app.use('/index',
    express.static('dist')
)
app.use('/', (req, res) => {
    res.send('Hello world')
})

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});