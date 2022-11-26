const express = require('express');
const router = express.Router();

const tag_controller = require('../controllers/tagController');

router.get("/tag/:id", tag_controller.get);
router.post("/post/:post_id/tags", tag_controller.getPostTags)
router.post("/tag", tag_controller.create);
router.delete("/tag/:id", tag_controller.delete);
router.put("/tag/:id", tag_controller.update);

module.exports = router;