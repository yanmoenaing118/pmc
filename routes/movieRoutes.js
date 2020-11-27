const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");
const authController = require("./../controllers/authController");

router
  .route("/")
  .get(movieController.getAllMovies)
  .post(authController.protect, movieController.createMovie);

router
  .route("/:id")
  .get(movieController.getAMovie)
  .patch(movieController.updateAMovie)
  .delete(movieController.deleteAMovie);

module.exports = router;
