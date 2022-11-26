const express = require('express');
const router = express.Router();

const collection_controller = require('../controllers/collectionController');

router.get("/collection/:id", collection_controller.get);
router.get("/collections", collection_controller.getAllCategories);
router.post("/collection", collection_controller.create);
router.delete("/collection/:id", collection_controller.delete);
router.put("/collection/:id", collection_controller.update);

module.exports = router;