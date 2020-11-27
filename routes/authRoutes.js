const express = require("express");
const router = express.Router();

const authController = require("./../controllers/authController");

router.post("/signup", authController.signup);

router.get("/login", authController.login);

router.route("/:id").get((req, res) => {
  res.send("Hello");
});

module.exports = router;
