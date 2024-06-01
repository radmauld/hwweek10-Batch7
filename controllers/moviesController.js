const moviesService = require("../services/moviesService");

// Get All Movies
const findAll = async (req, res, next) => {
    try {
        const data = await moviesService.findAll();
        res.status(200).json(data);
    } catch (err) {
        next(err);
    }
}

// Get Detail Movie
const findOne = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await moviesService.findOne(id);
        res.status(200).json(data);
    } catch (err) {
        next(err);
    }
}

// Create Movie
const create = async (req, res, next) => {
    try {
        const movieData = req.body;
        const data = await moviesService.create(movieData);
        res.status(201).json(data);
    } catch (err) {
        next(err);
    }
}

// Update Movie
const update = async (req, res, next) => {
    try {
        const id = req.params.id;
        const movieData = req.body;
        const data = await moviesService.update(id, movieData);
        res.status(200).json(data);
    } catch (err) {
        next(err);
    }
}

// Delete Movie
const destroy = async (req, res, next) => {
    try {
        const id = req.params.id;
        await moviesService.destroy(id);
        res.status(204).send();
    } catch (err) {
        next(err);
    }
}

const uploadImage = async (req, res, next) => {
    try {
        const { imageUrl } = await moviesService.uploadImage(req.file);
        res.status(200).json({ message: "Image uploaded successfully", imageUrl });
    } catch (err) {
        next(err);
    }        
}

module.exports = {
    findAll,
    findOne,
    create,
    update,
    destroy,
    uploadImage
};