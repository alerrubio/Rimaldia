const express = require('express');
const router = express.Router();

const notification_controller = require('../controllers/notificationController');

router.get("/notification/:id", notification_controller.get);
router.post("/notification", notification_controller.create);
router.put("/notification/:id", notification_controller.update);
router.delete("/notification/:id", notification_controller.delete);

module.exports = router;
