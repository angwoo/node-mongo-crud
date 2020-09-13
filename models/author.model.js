const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AuthorSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String },
    bio: { type: String, required: true },
}, { toJSON: { virtuals: true } });

AuthorSchema.virtual('books', {
    ref: 'Book',
    localField: '_id',
    foreignField: 'author',
    options: { sort: { name: -1 } },
});

module.exports = mongoose.model('Author', AuthorSchema);