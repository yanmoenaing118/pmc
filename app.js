const express = require("express");
const cors = require("cors");
const app = express();

app
  .use(cors())
  .use(express.urlencoded({ extended: true }))
  .use(express.json());

const authRouter = require("./routes/authRoutes");
const movieRouter = require("./routes/movieRoutes");
const tvShowRouter = require("./routes/tvShowRoutes");

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/movies", movieRouter);
app.use("/api/v1/tvshows", tvShowRouter);

// handle all the routes that are not defined
app.all("*", (req, res, next) => {
  // all the routes that are undefined will go inside of this handler
});

module.exports = app;
