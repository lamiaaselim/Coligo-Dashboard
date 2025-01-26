const jwt = require('jsonwebtoken');
const User = require('./../models/user.model');

// Middleware to protect routes and verify JWT from cookies or headers
const protect = async (req, res, next) => {
  let token;

  // Check for token in Authorization header
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  // Check for token in cookies if not in header
  if (!token && req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }

  if (!token) {
    return res.status(401).json({ error: 'Not authorized, no token provided' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Log expiration time for debugging
    console.log('Token Expiration:', new Date(decoded.exp * 1000));

    // Attach user to request object, excluding password
    req.user = await User.findById(decoded.id).select('-password');

    // Include isAdmin from the token
    req.user.isAdmin = decoded.isAdmin || false;

    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      console.error('Token has expired:', error.expiredAt); // Log expiration details
      return res.status(402).json({ error: 'Not authorized, token has expired' });
    }
    res.status(401).json({ error: 'Not authorized, token verification failed' });
  }
};


// Middleware to check if the user is an admin
const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(403).json({ error: 'Not authorized as an admin' });
  }
};


module.exports = { protect, admin };
