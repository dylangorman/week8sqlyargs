require("dotenv").config();
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const commandLineInput = yargs(hideBin(process.argv)).argv;

const { Movie } = require("./models/models");
const connection = require("./db/connection");
const {
  addMovie,
  listMovies,
  upDateMovie,
  deleteMovie,
} = require("./utils/index");

const app = async (commandLineInput) => {
  try {
    await connection.authenticate();
  } catch (error) {
    console.log(error);
  }

  try {
    if (commandLineInput.add) {
      await Movie.sync({ alter: true });
      await addMovie({
        title: commandLineInput.title,
        actor: commandLineInput.actor,
        year: commandLineInput.year,
        rating: commandLineInput.rating,
      });
    } else if (commandLineInput.list) {
      await listMovies();
    } else if (commandLineInput.update) {
      await upDateMovie(
        {
          title: commandLineInput.actor,
        },
        {
          where: { title: commandLineInput.title },
        }
      );
    } else if (commandLineInput.delete) {
      //   await Movie.sync({ alter: true });
      await deleteMovie({
        where: {
          title: commandLineInput.title,
        },
      });
    }
    await connection.close();
  } catch (error) {
    console.log(error);
  }
};
app(commandLineInput);
