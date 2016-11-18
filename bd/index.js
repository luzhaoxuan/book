var mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://127.0.0.1/book');
var BookSchema = new mongoose.Schema({
    name:String,
    price:String,
    cover:String
});
exports.Book = mongoose.model('Book',BookSchema);
