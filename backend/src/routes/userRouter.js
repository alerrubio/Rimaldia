const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/userController');

router.post("/user", user_controller.create);
router.get("/user/:id", user_controller.get);
router.delete("/user/:id", user_controller.delete);
router.put("/user/:id", user_controller.update);

module.exports = router;