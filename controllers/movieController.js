const Movie = require("./../models/Movie");

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json({
      status: "success",
      data: movies,
    });
  } catch (e) {
    console.error(e);
  }
};

exports.createMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json({
      status: "success",
      data: movie,
    });
  } catch (e) {
    console.log(e);
  }
};

exports.getAMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(201).json({
      status: "success",
      data: movie,
    });
  } catch (e) {
    console.error(e);
  }
};

exports.updateAMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      status: "success",
      data: movie,
    });
  } catch (e) {
    console.error(e);
  }
};

exports.deleteAMovie = async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
  });
  try {
  } catch (e) {
    console.error(e);
  }
};
