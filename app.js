const path = require('path');
const express = require('express');
const app = express();

const indexRouter = require('./routers/index')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile('${__dirname}/public/index.html');
});

app.listen(3000, () => {
    console.log('Application listening on port 3000');
});

app.use('/', indexRouter);

app.use(function (req, res, next) {
    res.status(404).send("Not Found")
});

