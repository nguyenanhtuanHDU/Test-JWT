const User = require("../models/User");
const { deleteUserByIdService } = require("../services/userService");

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find({});
      res.status(200).json({
        EC: 0,
        data: users,
      });
    } catch (error) {
      console.log(error);
      res.status(200).json({
        EC: -1,
        data: null,
      });
    }
  },
  deleteAUser: async (req, res) => {
    const user = await deleteUserByIdService(req.body.id);
    res.status(200).json({
      EC: 0,
      data: user,
    });
  },
};
