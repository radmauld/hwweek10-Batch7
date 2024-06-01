const { Movies } = require("../models");

// Get All Movies
const findAll = async () => {
    const data = await Movies.findAll();
    return data;
}

// Get Detail Movie
const findOne = async (id) => {
    const data = await Movies.findByPk(id);
    return data;
}

// Create Movie
const create = async (params) => {
    const data = await Movies.create(params, {returning: true});
    return data;
}

// Update Movie
const update = async (id, movieData) => {
    const movie = await Movies.findByPk(id);
    if (!movie) {
        throw new Error('Movie not found');
    }
    const updatedMovie = await movie.update(movieData);
    return updatedMovie;
}

// Delete Movie
const destroy = async (id) => {
    const movie = await Movies.findByPk(id);
    if (!movie) {
        throw new Error('Movie not found');
    }
    await movie.destroy();
}

module.exports = {
    findAll,
    findOne,
    create,
    update,
    destroy
};