const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  images: [{ type: String }],
  description: String,
});

module.exports = mongoose.model("item", itemSchema);
