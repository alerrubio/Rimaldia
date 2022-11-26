const express = require('express');
const router = express.Router();

const record_controller = require('../controllers/recordController');

router.post("/record", record_controller.create);
router.get("/record/:id", record_controller.get);
router.get("/records", record_controller.getAll);
router.delete("/record/:id", record_controller.delete);
router.put("/record/:id", record_controller.update);

module.exports = router;