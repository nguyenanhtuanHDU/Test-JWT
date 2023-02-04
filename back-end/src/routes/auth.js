const express = require("express");
const {
  postCreateAUser,
  postLogin,
} = require("../controllers/authController");
const router = express.Router();

router.post("/register", postCreateAUser);
router.post("/login", postLogin);
module.exports = router;
