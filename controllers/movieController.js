const Movie = require("./../models/Movie");
const catchAsync = require("./../utils/catchAsync");

exports.getAllMovies = catchAsync(async (req, res, next) => {
  const movies = await Movie.find();
  res.status(200).json({
    status: "success",
    data: movies,
  });
});

exports.createMovie = catchAsync(async (req, res, next) => {
  const movie = await Movie.create({
    ...req.body,
    user: "5fbf8a7e481b6b6cf4acb0f4",
  });
  res.status(201).json({
    status: "success",
    data: movie,
  });
});

exports.getAMovie = catchAsync(async (req, res, next) => {
  const movie = await Movie.findById(req.params.id);
  res.status(201).json({
    status: "success",
    data: movie,
  });
});

exports.updateAMovie = catchAsync(async (req, res, next) => {
  const movie = await Movie.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json({
    status: "success",
    data: movie,
  });
});

exports.deleteAMovie = catchAsync(async (req, res, next) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
  });
});
