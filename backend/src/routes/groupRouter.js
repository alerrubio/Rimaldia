const express = require('express');
const router = express.Router();

const group_controller = require('../controllers/groupController');

router.get("/group/:id", group_controller.get);
router.get("/user/:user_id/groups", group_controller.getAllUserGroups);
router.post("/group", group_controller.create);
router.delete("/group/:id", group_controller.delete);
router.put("/group/:id", group_controller.update);

module.exports = router;
