const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");
const multerMiddleware = require("../middlewares/multer");

router.get("/", moviesController.findAll);
router.get("/:id", moviesController.findOne);
router.post("/", moviesController.create);
router.post("/uploads", multerMiddleware, moviesController.uploadImage);
router.put("/:id", moviesController.update);
router.delete("/:id", moviesController.destroy);

module.exports = router;
