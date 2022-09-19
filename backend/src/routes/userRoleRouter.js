const express = require('express');
const router = express.Router();

const userRole_controller = require('../controllers/userRoleController');

router.get("/userRole/:id", userRole_controller.get);
router.post("/userRole", userRole_controller.create);
router.delete("/userRole/:id", userRole_controller.delete);
router.put("/userRole/:id", userRole_controller.update);

module.exports = router;