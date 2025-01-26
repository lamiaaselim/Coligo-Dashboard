const mongoose = require("mongoose");

const AnnouncementSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      default: "uploads/test.JPG",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, // Reference to the User model
  },
  { timestamps: true }
);

module.exports = mongoose.model("Announcement", AnnouncementSchema);
