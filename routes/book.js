const express = require('express');
const router = express.Router();
const BookController = require('../controllers/book.controller.js')

router.get("/:id", BookController.getBook);
router.get("/", BookController.getBooks);
router.post("/", BookController.createBook);
router.put("/:id", BookController.updateBook);
router.delete("/:id", BookController.deleteBook);

module.exports = router;
