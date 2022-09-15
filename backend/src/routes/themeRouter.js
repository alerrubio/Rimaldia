const express = require('express');
const router = express.Router();

const theme_controller = require('../controllers/themeController');

router.get("/theme/:id", theme_controller.get);
router.post("/theme", theme_controller.create);
router.delete("/theme/:id", theme_controller.delete);
router.put("/theme/:id", theme_controller.update);

module.exports = router;