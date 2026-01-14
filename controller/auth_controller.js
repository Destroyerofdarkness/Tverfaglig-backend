const User = require("../models/User.js");
const { handleUserError } = require("../handlers/errorHandlers.js");
const maxValidDate = 24 * 60 * 60;
const jwt = require("jsonwebtoken");

const sign_in_user = async (req, res) => {
  try {
    const userId = await User.login(req.body);
    res.status(200).json({ userId });
  } catch (err) {
    console.log(err);
    const errors = handleUserError(err);
    res.status(300).json({ errors });
  }
};

const findUser = (req, res, next) => {
  const { token } = req.body;
  try {
    if (token) {
      jwt.verify(token, process.env.secret, async (err, decodedToken) => {
        if (err) {
          console.log(err);
          res.json({ username: null });
        } else {
          console.log(decodedToken.id);
          const user = await User.findById(decodedToken.id);
          console.log(user);
          res.json({ username: user });
        }
      });
    } else {
      res.json({ username: null });
    }
  } catch (err) {
    console.log(err);
  }
};

const sign_up_user = async (req, res) => {
  try {
    const userId = await User.register(req.body);
    res.status(200).json({ userId });
  } catch (err) {
    const errors = handleUserError(err);
    res.status(300).json({ errors });
  }
};

const user_delete = async (req, res) => {
  const { user } = req.body;
  try {
    await User.findOneAndDelete({ username: user });
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false });
  }
};

module.exports = { sign_up_user, sign_in_user, user_delete, findUser };
