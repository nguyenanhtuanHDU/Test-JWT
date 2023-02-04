const User = require("../models/User");

module.exports = {
  createAUserService: async (username, password, email) => {
    try {
      const user = await User.create({ username, password, email });
      return user
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
