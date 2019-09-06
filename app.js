// ==================================================================
// SETUP
//
// A .env document is needed with the following parameters
// NODE_ENVIRONMENT=production or development
// PORT=****
// ==================================================================
require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Allow all reqs from all domains & localhost
app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));
app.set("view engine", "ejs");

// ==================================================================
// ROUTES
// ==================================================================

app.get('/', function (req, res) {
    res.render('home.ejs', )
});

app.get('/heat-transfer', function (req, res) {
    res.render('heat-transfer.ejs', )
});

app.get('/heat-up', function (req, res) {
    res.render('heat-up.ejs', )
});

app.get('/process-load', function (req, res) {
    res.render('process-load.ejs', )
});

app.post('*', function (req, res) {
    res.status(500).send({
        error: "That route does not exist"
    });
});

app.get('*', function (req, res) {
    res.status(500).send({
        error: "That route does not exist"
    });
});

app.delete('*', function (req, res) {
    res.status(500).send({
        error: "That route does not exist"
    });
});

app.put('*', function (req, res) {
    res.status(500).send({
        error: "That route does not exist"
    });
});

app.listen(process.env.PORT, process.env.IP, function () {
    console.log('Heater calc running on port ' + process.env.PORT + '...');
});