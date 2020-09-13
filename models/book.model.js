const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BookSchema = new Schema({
    name: { type: String, required: true },
    blurb: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, required: true, ref: 'Author' },
    publisher: { type: Schema.Types.ObjectId, required: true, ref: 'Publisher' },
    publishedDate: { type: Date, required: true },
});

module.exports = mongoose.model('Book', BookSchema);