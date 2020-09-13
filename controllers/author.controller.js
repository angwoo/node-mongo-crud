const Author = require('../models/author.model.js');

function createAuthor(req, res) {
    const author = new Author({
        name: req.body.name,
        image: req.body.image,
        bio: req.body.bio,
    })
    author.save().then((data) => {
        return res.status(200).json(data)
    }).catch(err => {
        return res.status(400).json(err)
    })
}

function getAuthors(req, res) {
    Author.find(req.params).then(data => {
        return res.status(200).json(data)
    }).catch(err => {
        return res.status(400).json(err)
    });
}

function getAuthor(req, res) {
    Author.findById(req.params.id).populate('books').then(data => {
        return res.status(200).json(data)
    }).catch(err => {
        return res.status(400).json(err)
    });
}

function updateAuthor(req, res) {
    let updated = {
        name: req.body.name,
        image: req.body.image,
        bio: req.body.bio,
    }
    Object.keys(updated).forEach(key => updated[key] === undefined ? delete updated[key] : {});
    Author.findOneAndUpdate({ _id: req.params.id }, updated, { new: true }).then(data => {
        return res.status(200).json(data)
    }).catch(err => {
        return res.status(400).json(err)
    });
}

function deleteAuthor(req, res) {
    Author.deleteOne({ _id: req.params.id }).then(data => {
        return res.status(200).json(data)
    }).catch(err => {
        return res.status(400).json(err)
    });
}

module.exports = {
    createAuthor,
    getAuthors,
    getAuthor,
    deleteAuthor,
    updateAuthor
}