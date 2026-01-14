const User = require("../models/User.js");
const Quote = require("../models/Quote.js");
const { handleQuoteError } = require("../handlers/errorHandlers.js");

const user_data = async (req, res, next) => {
  const username = req.params.user;
  try {
    const quotes = await User.findQuotes(username);
    const user = await User.findOne({ username: username });
    console.log("User data:", user, quotes);

    if (!user) {
      throw Error("User not found");
    }
    res.json({ user, quotes });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
};

const user_publish = async (req, res) => {
  try {
    await Quote.publish(req.body);
    res.status(200).json({ success: true });
  } catch (err) {
    const errors = handleQuoteError(err);
    res.status(300).json({ errors });
  }
};

module.exports = { user_data, user_publish };
