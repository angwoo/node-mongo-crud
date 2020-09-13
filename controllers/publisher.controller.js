const Publisher = require('../models/Publisher.model.js');

function createPublisher(req, res) {
    const publisher = new Publisher({
        name: req.body.name,
    })
    publisher.save().then((data) => {
        return res.status(200).json(data)
    }).catch(err => {
        return res.status(400).json(err)
    })
}

function getPublishers(req, res) {
    Publisher.find(req.params).then(data => {
        return res.status(200).json(data)
    }).catch(err => {
        return res.status(400).json(err)
    });
}

function getPublisher(req, res) {
    Publisher.findById(req.params.id).populate('books').then(data => {
        return res.status(200).json(data)
    }).catch(err => {
        return res.status(400).json(err)
    });
}

function updatePublisher(req, res) {
    let updated = {
        name: req.body.name,
    }
    Object.keys(updated).forEach(key => updated[key] === undefined ? delete updated[key] : {});
    Publisher.findOneAndUpdate({ _id: req.params.id }, updated, { new: true }).then(data => {
        return res.status(200).json(data)
    }).catch(err => {
        return res.status(400).json(err)
    });
}

function deletePublisher(req, res) {
    Publisher.deleteOne({ _id: req.params.id }).then(data => {
        return res.status(200).json(data)
    }).catch(err => {
        return res.status(400).json(err)
    });
}

module.exports = {
    createPublisher,
    getPublishers,
    getPublisher,
    deletePublisher,
    updatePublisher
}