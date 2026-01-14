const Quote = require("../models/Quote.js");
const User = require("../models/User.js");

const randomQoute = (list) => {
  const random = Math.floor(Math.random() * list.length);
  return list[random];
};

const home_quote_get = async (req, res) => {
  try {
    const quoteList = await Quote.find();
    const quote = randomQoute(quoteList);
    res.status(200).json({ quote });
  } catch (err) {
    res.status(500);
    console.log(err);
  }
};

module.exports = {
  home_quote_get,
};
