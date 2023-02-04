const express = require("express");
const { getAllUsers, deleteAUser } = require("../controllers/userController");

const router = express.Router();

router.get("/user", getAllUsers);
router.delete("/user", deleteAUser);
module.exports = router;
