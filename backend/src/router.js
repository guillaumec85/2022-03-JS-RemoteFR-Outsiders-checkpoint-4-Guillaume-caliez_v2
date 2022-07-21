const express = require("express");

const { PresController } = require("./controllers");

const router = express.Router();

router.get("/api/presentation", PresController.browse);
router.get("/api/presentation/:id", PresController.read);
router.put("/api/presentation/:id", PresController.edit);
router.post("/api/presentation", PresController.add);
router.delete("/api/presentation/:id", PresController.delete);

module.exports = router;
