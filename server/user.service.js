const mongoose = require("mongoose");
const XSSI_PREVENTION = ")]}',\n";
const User = require("./user.model");
let responseObject = {};

require("./mongo").connect();

function getUsers(req, res) {
  User.find({}, (error, users) => {
    if (error) {
      responseObject = {
        success: false,
        data: error
      };
      responseObject = JSON.stringify(responseObject);

      res.send(XSSI_PREVENTION + responseObject);

      return;
    }

    responseObject = {
      success: true,
      data: users
    };
    responseObject = JSON.stringify(responseObject);

    res.send(responseObject);

    return;
  });
}

module.exports = {
  getUsers
};
