const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const addressSchema = require("./address.model");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "user", "manager"], default: "user" },
  address: { type: addressSchema },
  isSubscribed: { type: Boolean, default: false },
  alternativeEmails: [{ type: String }],
  profileImage: { type: String , default: "uploads/avatar.jpg"},
});

// Encrypt password before saving
UserSchema.pre("save", async function (next) {
  // Remove confirmPassword field if present
  if (this.confirmPassword) {
    delete this.confirmPassword;
  }
  // Only hash the password if it has been modified
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to match entered password with hashed password
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", UserSchema);
