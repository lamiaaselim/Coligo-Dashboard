const express = require("express");
const authUser = require("./../middlewares/authenticateMW");
const upload = require("../middlewares/upload.middleware");

const UserController = require("../controllers/user.controller");

const router = express.Router();
router.route("/register").post(UserController.register);
router.route("/login").post(UserController.login);
router.route("/logout").post(UserController.logout);

router
  .route("/profile-image")
  .post(authUser.protect, upload.single("profileImage"), UserController.updateProfileImage);

module.exports = router;
