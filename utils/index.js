const { Sequelize } = require("sequelize");
const { Movie } = require("../models/models");
const addMovie = async (movieObj) => {
  try {
    const movie = await Movie.create(movieObj);
    console.log(JSON.stringify(movie, null, 2));
    console.log(`We added ${movie.title}.`);
  } catch (error) {
    console.log(error);
  }
};

const listMovies = async () => {
  try {
    const movies = await Movie.findAll({});
    console.log(movies.every((user) => user instanceof Movie));
    console.log("All Movies: ", JSON.stringify(movies, null, 2));
  } catch (error) {
    console.log(error);
  }
};

const upDateMovie = async (movieObj) => {
  try {
    const movies = await Movie.findOne({ title: movieObj.title });
    const newMovie = await movie.update(movieObj);
    console.log(
      `The Title: ${movieObj.title}, has been updated to Title: ${movieObj.newMovie}.`
    );
  } catch (error) {
    console.log(error);
  }
};
const deleteMovie = async (movieObj) => {
  try {
    const deletedMovie = await Movie.destroy(movieObj);
    console.log(`Sucessfully deleted ${deletedMovie}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addMovie,
  listMovies,
  upDateMovie,
  deleteMovie,
};
