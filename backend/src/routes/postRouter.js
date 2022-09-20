const express = require('express');
const router = express.Router();

const post_controller = require('../controllers/postController');

//Reportes
router.get("/post/most-liked-posts", post_controller.get_most_liked_post);
router.get("/post/most-active-users", post_controller.get_most_active_users);

router.post("/post", post_controller.create);
router.get("/post/:id", post_controller.get);
router.delete("/post/:id", post_controller.delete);
router.put("/post/:id", post_controller.update);



module.exports = router;