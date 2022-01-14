const { Sequelize, DataTypes } = require("sequelize");
const connection = require("../db/connection");
const {
  setApproval,
  firstUpper,
  allUpper,
  allLower,
  lowerCaseBody,
} = require("./modelHelpers");

const Movie = connection.define("Movies", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    get() {
      const rawValue = this.getDataValue("title");
      return firstUpper(rawValue);
      // return allUpper(rawValue);
      // return allLower(rawValue);
    },
    set(value) {
      this.setDataValue("title", lowerCaseBody(value));
    },
  },

  actor: {
    type: DataTypes.STRING,
    allowNull: false,
    get() {
      const rawValue = this.getDataValue("actor");
      // return lowerCaseBody(rawValue);
      return firstUpper(rawValue);
    },
    set(value) {
      this.setDataValue("actor", lowerCaseBody(value));
    },
  },
  approval: {
    type: DataTypes.STRING,
    allowNull: false,
    get() {
      const rawValue = this.getDataValue("approval");
      return lowerCaseBody(rawValue);

      // return allUpper(rawValue);
    },
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    set(value) {
      this.setDataValue("approval", setApproval(value));
      this.setDataValue("rating", value);
    },
  },
});

module.exports = {
  Movie,
};
