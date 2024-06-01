const { where } = require("sequelize");
const moviesRepository = require("../repostories/moviesRepository");

// Get All Movies
const findAll = async () => {
    const data = await moviesRepository.findAll();
    return data;
}

// Get Detail Movie 
const findOne = async (id) => {
    const data = await moviesRepository.findOne(id);

    const filterOption = {
        where : {
            id: +id
        }
    }
    return data;
}

//Create Movie
const create = async (params) => {
    const data = await moviesRepository.create(params);
    return data;
}

//Update Movie
const update = async (id, movieData) => {
    const data = await moviesRepository.update(id, movieData);
    return data;
}

//Delete Movie
const destroy = async (id) => {
    const data = await moviesRepository.destroy(id);
    return data;
}

//Upload Image
const uploadImage = async (file) => {
    if (!file) {
        throw { name: "invalidfile" };
    }
    const imageUrl = `http://localhost:3000/api/images/${file.filename}`;
    return { imageUrl };
}
module.exports = {
    findAll,
    findOne,
    create,
    update,
    destroy,
    uploadImage
};