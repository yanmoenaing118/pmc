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
const userRouter = require("./routes/userRoutes");

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/movies", movieRouter);
app.use("/api/v1/tvshows", tvShowRouter);

app.all("*", (req, res, next) => {
  // need a middleware to handle the undefiend routes on the server
});

app.use((err, req, res, next) => {
  // need a global error handler
  res.status(403).json({
    status: "fail",
    message: err.message,
  });
});

module.exports = app;
