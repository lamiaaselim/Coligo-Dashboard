const UserService = require("../services/user.service");

// Register new user
exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const user = await UserService.register(username, email, password);
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.role === 'admin',
      token: UserService.generateToken(user),
    });
  } catch (error) {
    next(error);
  }
};

// Login
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const result = await UserService.login(email, password);
    if (result) {
      res.cookie('token', result.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 2 * 60 * 60 * 1000, // 2 hours
      });
      res.json({
        _id: result.user._id,
        email: result.user.email,
        isAdmin: result.user.role === 'admin',
        token: result.token,
      });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    next(error);
  }
};

// Logout
exports.logout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
};

// Update profile image
exports.updateProfileImage = async (req, res, next) => {
  try {
    const userId = req.user._id; // Get user ID from the request (protected route)
    const profileImage = req.file.path; // Get the file path from Multer

    // Update the user's profile image in the database
    const updatedUser = await UserService.updateProfileImage(userId, profileImage);

    res.status(200).json({
      message: "Profile image updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};