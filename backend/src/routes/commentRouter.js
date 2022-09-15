const express = require('express');
const router = express.Router();

const comment_controller = require('../controllers/commentController');

router.get("/comment/:id", comment_controller.get);
router.post("/comment", comment_controller.create);
router.delete("/comment/:id", comment_controller.delete);
router.put("/comment/:id", comment_controller.update);

module.exports = router;