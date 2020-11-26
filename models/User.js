const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  profile_image: String,

  movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "movie" }],

  tvShows: [{ type: mongoose.Schema.Types.ObjectId, ref: "tvShow" }],

  favorites: {
    movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "movie" }],
    tvShows: [{ type: mongoose.Schema.Types.ObjectId, ref: "tvShow" }],
  },

  collections: [
    {
      title: String,
      movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "movie" }],
      tvShows: [{ type: mongoose.Schema.Types.ObjectId, ref: "tvShow" }],
    },
  ],
});

module.exports = mongoose.model("user", userSchema);
