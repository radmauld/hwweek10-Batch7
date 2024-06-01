const express = require("express");
const router = express.Router();
const productRoute = require("../moviesRoute.js")
const path = require("path")

app.use('/api/images', express.static(path.join(__dirname, 'uploads')));

router.use("/api/movies", productRoute);


module.exports = router;