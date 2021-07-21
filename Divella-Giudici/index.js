const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./Routes');
const port = 5000;

const app = express();

mongoose.Promise = global.Promise;

mongoose.connect(
    'mongodb://localhost/divella-giudici',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.listen(port, () => {
    console.log('Está aplicacion corre en la siguente ruta http://localhost:5000/')
});

app.use('/', routes());