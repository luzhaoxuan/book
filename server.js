var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
var Book = require('./bd').Book;
app.use(bodyParser.json());
app.use(express.static(__dirname));
app.get('/', function (req, res) {
    res.sendFile('./index.html', {root: __dirname})
});
app.post('/books', function (req, res) {
    var book = req.body;
    Book.create(book, function (err, doc) {
        res.send(book)
    })
});
app.get('/books', function (req, res) {
    Book.find({}, function (err, doc) {
        if (doc) {
            res.send(doc)
        }
    })
});
app.get('/books/:id', function (req, res) {
    var id = req.params.id;
    Book.findById(id).then(function (doc) {
        res.send(doc)
    })
});
app.delete('/books/:id', function (req, res) {
    var id = req.params.id;
    Book.remove({_id: id}, function (doc) {
        res.send({})
    })
});
app.put('/books/:id',function (req,res) {
    var book = req.body;
    var id = req.params.id;
    Book.update({_id:id},book,function (doc) {
        res.send(doc)
    })
});
app.listen(9090);
