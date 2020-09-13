const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PublisherSchema = new Schema({
    name: { type: String, required: true },
}, { toJSON: { virtuals: true } });

PublisherSchema.virtual('books', {
    ref: 'Book',
    localField: '_id',
    foreignField: 'publisher',
    options: { sort: { name: -1 } },
});

module.exports = mongoose.model('Publisher', PublisherSchema);