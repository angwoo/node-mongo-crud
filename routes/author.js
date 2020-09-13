const express = require('express');
const router = express.Router();
const AuthorController = require('../controllers/author.controller.js')

router.get("/:id", AuthorController.getAuthor);
router.get("/", AuthorController.getAuthors);
router.post("/", AuthorController.createAuthor);
router.put("/:id", AuthorController.updateAuthor);
router.delete("/:id", AuthorController.deleteAuthor);

module.exports = router;
