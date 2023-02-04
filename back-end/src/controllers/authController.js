const bcrypt = require("bcrypt");
const User = require("../models/User");

const { createAUserService } = require("../services/userService");

module.exports = {
  postCreateAUser: async (req, res) => {
    const { username, password, email, admin} = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    console.log(">>> check req.body: ", req.body);
    const user = await createAUserService(username, hashPassword, email, admin);
    res.status(200).json({
      EC: 0,
      data: user,
    });
  },
  postLogin: async (req, res) => {
    try {
      const { username, password } = req.body;
      const userLogin = await User.findOne({ username });
      const comparePW = await bcrypt.compareSync(password, userLogin.password);
      if (!comparePW) {
        res.status(404).json({
          EC: -1,
          data: null,
        });
      } else {
        res.status(404).json({
          EC: 0,
          data: userLogin,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(404).json({
        EC: -1,
        data: null,
      });
    }
  },
};
