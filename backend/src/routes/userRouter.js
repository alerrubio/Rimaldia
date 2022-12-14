const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/userController');

router.post("/user", user_controller.create);
router.get("/user/:id", user_controller.get);
router.get("/users", user_controller.getAll);
router.get("/usersCount", user_controller.getUsersCount);
router.post("/isUserAdmin", user_controller.isAdmin);
router.post("/getUserByEmail", user_controller.getByEmail);
router.delete("/user/:id", user_controller.delete);
router.put("/user/:id", user_controller.update);

module.exports = router;