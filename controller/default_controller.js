const Quote = require("../models/Quote.js");
const User = require("../models/User.js");

const randomQoute = (list) => {
  const random = Math.floor(Math.random() * list.length);
  return list[random];
};

const user_page_public_render = async (req, res, next) => {
  const username = req.params.user;
  try {
    console.log(username);
    const quotes = await User.findQuotes(username);
    const user = await User.findOne({ username: username });
    console.log(quotes);
    res.render("userPub", { quotes, title: `${user.username}'s quotes` });
  } catch (err) {
    console.log(err);
    res.status(500);
    next();
  }
};

const home_quote_get = async (req, res) => {
  try {
    const quoteList = await Quote.find();
    const quote = randomQoute(quoteList);
    res.status(200).json({ quote });
  } catch (err) {
    res.status(500);
    console.log(err)
  }
};

module.exports = {
  user_page_public_render,
  home_quote_get
};
