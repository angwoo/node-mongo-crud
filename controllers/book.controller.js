const Book = require('../models/book.model.js');

function createBook(req, res) {
    const book = new Book({
        name: req.body.name,
        blurb: req.body.blurb,
        author: req.body.author,
        publisher: req.body.publisher,
        publishedDate: new Date(req.body.publishedDate),
    })
    book.save().then((data) => {
        return res.status(200).json(data)
    }).catch(err => {
        return res.status(400).json(err)
    })
}

function getBooks(req, res) {
    Book.find(req.params).populate('publisher').
        populate('author').then(data => {
            return res.status(200).json(data)
        }).catch(err => {
            return res.status(400).json(err)
        });
}

function getBook(req, res) {
    Book.findById(req.params.id).populate('publisher').
        populate('author').then(data => {
            return res.status(200).json(data)
        }).catch(err => {
            return res.status(400).json(err)
        });
}

function updateBook(req, res) {
    let updated = {
        name: req.body.name,
        blurb: req.body.blurb,
        author: req.body.author,
        publisher: req.body.publisher,
        publishedDate: req.body.publishedDate ? new Date(req.body.publishedDate) : undefined,
    }
    Object.keys(updated).forEach(key => updated[key] === undefined ? delete updated[key] : {});
    Book.findOneAndUpdate({ _id: req.params.id }, updated, { new: true }).then(data => {
        return res.status(200).json(data)
    }).catch(err => {
        return res.status(400).json(err)
    });
}

function deleteBook(req, res) {
    Book.deleteOne({ _id: req.params.id }).then(data => {
        return res.status(200).json(data)
    }).catch(err => {
        return res.status(400).json(err)
    });
}

module.exports = {
    createBook,
    getBooks,
    getBook,
    deleteBook,
    updateBook
}