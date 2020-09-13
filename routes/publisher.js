const express = require('express');
const router = express.Router();
const PublisherController = require('../controllers/publisher.controller.js')

router.get("/:id", PublisherController.getPublisher);
router.get("/", PublisherController.getPublishers);
router.post("/", PublisherController.createPublisher);
router.put("/:id", PublisherController.updatePublisher);
router.delete("/:id", PublisherController.deletePublisher);

module.exports = router;
