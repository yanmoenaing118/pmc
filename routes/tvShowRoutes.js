const express = require("express");

const router = express.Router();
const tvShowController = require("../controllers/tvShowController");

router
  .route("/")
  .get(tvShowController.getAlltvShows)
  .post(tvShowController.createtvShow);

router
  .route("/:id")
  .get(tvShowController.getAtvShow)
  .patch(tvShowController.updateAtvShow)
  .delete(tvShowController.deleteAtvShow);

module.exports = router;
