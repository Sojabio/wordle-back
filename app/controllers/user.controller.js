const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");

// UPDATE NAME
exports.updateUsername = (req, res) => {
  const userId = req.userId
  const newUsername = req.body.newUsername;

  User.findByPk(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User not found." });
      }

      user.username = newUsername;
      user.save()
        .then(() => {
          res.status(200).send({ message: "Username updated successfully." });
        })
        .catch((error) => {
          res.status(500).send({ message: error.message });
        });
    })
    .catch((error) => {
      res.status(500).send({ message: error.message });
    });
  }
