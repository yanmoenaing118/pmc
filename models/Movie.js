const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "A movie must belong to a user"],
    ref: "user",
  },

  title: {
    type: String,
    required: [true, "A movie must have a title"],
  },

  images: [String],

  overview: String,
  about: String,
  videos: [String],
  why_you_like: "",
});

module.exports = mongoose.model("movie", movieSchema);
