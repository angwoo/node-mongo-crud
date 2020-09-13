if (!process.env.ENV) {
    require('dotenv').config();
}

const port = process.env.PORT;

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const authorRouter = require('./routes/author.js');
const publisherRouter = require('./routes/publisher.js');
const bookRouter = require('./routes/book.js');

app.use('/authors', authorRouter);
app.use('/publishers', publisherRouter);
app.use('/books', bookRouter);

app.listen(port, () => {
    console.log(`Listening on :${port}`)
    console.log(`Basic CRUD application`)
})