const express = require('express');
const router = require('./router');

const app = express()
const PORT = process.env.PORT || 3000

app.use('/route', router)

app.use('/index', express.static('dist'))


app.use('/css', express.static('dist/css'))


app.use('/js', express.static('dist/js'))


app.use('/img', express.static('dist/img'))



app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});

