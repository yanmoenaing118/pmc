const express = require("express");
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.send("Hello");
  })
  .post((req, res) => {
    res.send("Post");
  });

router.route("/:id").get((req, res) => {
  res.send("Hello");
});
