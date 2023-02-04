const jwt = require("jsonwebtoken");

const key = process.env.JWT_KEY;

module.exports = {
  createToken: () => {
    const token = jwt.sign({ username: "tuanna", address: "thanh hoa" }, key);
    console.log(">>> check token: ", token);
    return token;
  },

  verifyToken: (token) => {
    try {
      const decoded = jwt.verify(token, key);
      console.log(decoded);
      return decoded;
    } catch (err) {
      console.log(">>> check err: ", err);
    }
  },
};
