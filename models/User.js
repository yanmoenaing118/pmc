const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
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

userSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 8);
  this.password = hash;
  next();
});

userSchema.methods.correctPassword = async function (password, hash) {
  return await bcrypt.compare(password, hash);
};

module.exports = mongoose.model("user", userSchema);
