const http = require("http");
const express = require("express");
const path = require("path");
const app = require("./app");
const dbConnect = require("./config/db.config");
const socketConfig = require("./config/socket.config");
const userRoutes = require("./routes/user.routes");
const quizRoutes = require("./routes/quiz.routes");
const announceRoutes = require("./routes/announce.routes");
const NotFoundMiddleware = require("./middlewares/NotFoundMW");
const ErrorMiddleware = require("./middlewares/ErrorMW");

// Connect to MongoDB
dbConnect();

// Create HTTP server
const server = http.createServer(app);

// Set up Socket.IO
const io = socketConfig(server);

// Middleware to inject Socket.IO instance in the request
app.use((req, res, next) => {
  req.io = io;
  next();
});

// Debugging
// console.log("Serving static files from:", path.join(__dirname, "uploads"));
app.use("/api/uploads", express.static(path.join(__dirname, "uploads")));

// Routes setup after io middleware
app.use("/api/user", userRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/api/announce', announceRoutes);


//Not Found Handling MW
app.use(NotFoundMiddleware.handle);

// Error Handling MW
app.use(ErrorMiddleware.handle);

// Start the server
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
