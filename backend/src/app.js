const express = require("express");
const cors = require("cors");
const compression = require("compression");
const morgan = require("morgan");

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(cors(corsOptions));

module.exports = app;
