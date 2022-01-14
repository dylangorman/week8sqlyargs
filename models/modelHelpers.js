const setApproval = (rating) => {
  try {
    if (rating === 0 && rating <= 3) {
      return "bad";
    } else if (rating > 3 && rating <= 6) {
      return "average";
    } else if (rating > 6 && rating < 9) {
      return "good";
    } else if (rating > 9 && rating <= 10) {
      return "excellent";
    } else {
      console.log("");
    }
  } catch (error) {
    console.log(error);
  }
};

const firstUpper = (rawValue) => {
  try {
    return rawValue
      .split(" ")
      .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
      .join(" ");
  } catch (error) {
    console.log(error);
  }
};
const allUpper = (rawValue) => {
  try {
    return rawValue
      .split(" ")
      .map((word) => `${word.toUpperCase()}`)
      .join(" ");
  } catch (error) {
    console.log(error);
  }
};
const allLower = (rawValue) => {
  try {
    return rawValue
      .split(" ")
      .map((word) => `${word.toLowerCase()}`)
      .join(" ");
  } catch (error) {
    console.log(error);
  }
};
const lowerCaseBody = (rawValue) => {
  try {
    const newValue = rawValue.toLowerCase();
    // .split(" ")
    // .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    // .join(" ");
    // console.log("raw value from model helpers;  ", newValue);
    return newValue;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  setApproval,
  firstUpper,
  allUpper,
  allLower,
  lowerCaseBody,
};
