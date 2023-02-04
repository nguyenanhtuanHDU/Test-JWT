const { createAUserService } = require("../services/userService");

module.exports = {
  postCreateAUser: async (req, res) => {
    const { username, password, email } = req.body;
    console.log(">>> check req.body: ", req.body);
    const user = await createAUserService(username, password, email);
    res.status(200).json({
      EC: 0,
      data: user,
    });
  },
};
