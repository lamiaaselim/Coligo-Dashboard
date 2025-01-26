const UserSchema = require("./../models/user.model");
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      isAdmin: user.role === "admin",
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "2h",
    }
  );
};
exports.generateToken = generateToken; 

exports.register = async (username,email, password) => {
  const user = await UserSchema.create({ username, email ,password });
  return user;
};

exports.login = async (email, password) => {
  const user = await UserSchema.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    return { user, token: generateToken(user)};
  }
  return null;
};

// Update profile image
exports.updateProfileImage = async (userId, profileImage) => {
  const user = await UserSchema.findByIdAndUpdate(
    userId,
    { profileImage },
    { new: true } // Return the updated user
  );
  return user;
};
