module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define('Movie', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        genres: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        photo: {
            type: DataTypes.STRING, // Asumsikan kolom photo bertipe STRING
            allowNull: false
        }
    }, {
        tableName: 'movies',
        timestamps: false
    });

    return Movie;
};