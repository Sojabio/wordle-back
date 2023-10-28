const userController = require("../controllers/user.controller");
const authJwt = require("../middleware/authJwt");

module.exports = function(app) {
  app.use("/api/user/*", authJwt.verifyToken);

  app.put("/api/user/update-username", userController.updateUsername);
};
