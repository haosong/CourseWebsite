var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var fs = require("fs");
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true);
    next();
});
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var server = app.listen(3000, "localhost", function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('\nNodeJS Server is running at: http://%s:%s\n\nServer Log:\n', host, port);
});

app.get('/books', function (req, res) {
    fs.readFile(__dirname + "/" + "book.json", 'utf8', function (err, data) {
        console.log((new Date()).toISOString() + " Get book.json Success!\n");
        data = JSON.parse(data);
        var books = data['books'];
        res.end(JSON.stringify(books));
    });
});

app.get('/books/:id', function (req, res) {
    fs.readFile(__dirname + "/" + "book.json", 'utf8', function (err, data) {
        console.log((new Date()).toISOString() + " Get book.json Success!\n");
        data = JSON.parse(data);
        var book = data['books'][req.params.id];
        res.end(JSON.stringify(book));
    });
});

app.put('/books/:id', function (req, res) {
    fs.readFile(__dirname + "/" + "book.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        data['books'][req.params.id] = req.body;
        fs.writeFile(__dirname + "/" + "book.json", JSON.stringify(data, null, 2), function (err) {
            if (err != null) { console.log(err); }
            else { console.log((new Date()).toISOString() + " Update book.json Success!\n"); }
        });
        res.end();
    });
});

app.put('/feedback', function (req, res) {
    fs.readFile(__dirname + "/" + "feedback.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        data['feedback'].push(req.body);
        fs.writeFile(__dirname + "/" + "feedback.json", JSON.stringify(data, null, 2), function (err) {
            if (err != null) { console.log(err); }
            else { console.log((new Date()).toISOString() + " Update feedback.json Success!\n"); }
        });
        res.end();
    });
});