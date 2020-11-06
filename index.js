const express = require('express');

const app = express()
const PORT = process.env.PORT || 3000

var router = require('./router')

app.use('/index', router)



app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});