const express = require("express");

const { PresController, MessageController } = require("./controllers");

const router = express.Router();

router.get("/api/presentation", PresController.browse);
router.get("/api/presentation/:id", PresController.read);
// router.put("/api/presentation/:id", PresController.edit);
// router.post("/api/presentation", PresController.add);
// router.delete("/api/presentation/:id", PresController.delete);

router.get("/api/message", MessageController.browse);
// router.get("/api/presentation/:id", PresController.read);
// router.put("/api/presentation/:id", PresController.edit);
router.post("/api/message", MessageController.add);
// router.delete("/api/presentation/:id", PresController.delete);

module.exports = router;
