const express = require("express");
const router = express.Router();

const userService = require("./user.service");

router.get("/getUsers", (req, res) => {
  console.log("getusers");
  userService.getUsers(req, res);
});

module.exports = router;
