const express = require('express');
const router = express.Router();

const post_controller = require('../controllers/postController');

router.post("/post", post_controller.create);
router.get("/post/:id", post_controller.get);
router.delete("/post/:id", post_controller.delete);
router.put("/post/:id", post_controller.update);

module.exports = router;