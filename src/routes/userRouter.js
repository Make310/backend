const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/new", userController.create);
router.get("/list", userController.list);
router.get("/:id", userController.listOne);
router.put("/:id", userController.update);
router.delete("/:id", userController.remove);

module.exports = router;
