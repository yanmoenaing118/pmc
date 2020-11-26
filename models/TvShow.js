const mongoose = require("mongoose");

const tvShowSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "A TV show must belong to a user"],
    ref: "user",
  },

  title: {
    type: String,
    required: [true, "A TV show must have a title"],
  },

  images: [String],

  overview: String,
  about: String,
  videos: [String],
  episodes: [
    {
      title: String,
      runtime: String,
      favorite: String,
      about: String,
    },
  ],
  why_you_like: "",
});

module.exports = mongoose.model("tvShow", tvShowSchema);
