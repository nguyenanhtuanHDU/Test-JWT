const User = require("../models/User");

module.exports = {
  createAUserService: async (username, password, email, admin) => {
    try {
      const user = await User.create({ username, password, email, admin });
      return user;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  deleteUserByIdService: async (id) => {
    try {
      const user = await User.deleteOne({ _id: id });
      return user;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
