const express = require('express');

const app = express()
const PORT = process.env.PORT || 3000

app.use('/index', express.static('dist'))


app.use('/css', express.static('dist/css'))


app.use('/js', express.static('dist/js'))


app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});

