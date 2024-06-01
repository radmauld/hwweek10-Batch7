const express = require("express");
const movieRoutes = require("./routes/moviesRoute"); // Sesuaikan path dengan lokasi file routes Anda
const bodyParser = require('body-parser');
const app = express();

// Middleware untuk parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Menggunakan router
app.use("/api/movies", movieRoutes);

// Menjalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});