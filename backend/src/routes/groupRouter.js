const express = require('express');
const router = express.Router();

const group_controller = require('../controllers/groupController');

router.get("/group/:id", group_controller.get);
router.get("/groups", group_controller.getAll);
router.get("/user/:user_id/group/:group_id", group_controller.isUserInForum);
router.get("/user/:user_id/groups", group_controller.getAllUserGroups);
router.get("/user/:user_id/owned_groups", group_controller.getAllUserOwnedGroups);
router.post("/group", group_controller.create);
router.delete("/group/:id", group_controller.delete);
router.put("/group/:id", group_controller.update);
router.put("/group/:id/add_user", group_controller.addUser);

module.exports = router;
