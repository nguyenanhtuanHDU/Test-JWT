const bcrypt = require("bcrypt");

const { createAUserService } = require("../services/userService");

module.exports = {
  postCreateAUser: async (req, res) => {
    const { username, password, email } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    console.log(">>> check req.body: ", req.body);
    const user = await createAUserService(username, hashPassword, email);
    res.status(200).json({
      EC: 0,
      data: user,
    });
  },
};
