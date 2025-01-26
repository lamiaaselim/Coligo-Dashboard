const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload.middleware");
const announcementsController = require("../controllers/announce.controller");
const authUser = require("./../middlewares/authenticateMW");

// ALL routes
router
  .route("/")
  .get(announcementsController.getAllAnnouncements)
  .post(authUser.protect ,upload.single("picture"), announcementsController.createAnnouncement);

router
  .route("/:id")
  .get(announcementsController.getAnnouncementById)
  .put(authUser.protect, upload.single("picture"), announcementsController.updateAnnouncement)
  .delete(authUser.protect, announcementsController.deleteAnnouncement);

module.exports = router;
