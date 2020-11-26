const TvShow = require("./../models/TvShow");
const catchAsync = require("./../utils/catchAsync");

exports.getAlltvShows = catchAsync(async (req, res) => {
  const tvShows = await TvShow.find();
  res.status(200).json({
    status: "success",
    data: tvShows,
  });
});

exports.createtvShow = catchAsync(async (req, res) => {
  const tvShow = await TvShow.create({
    ...req.body,
    user: "5fbf8a7e481b6b6cf4acb0f4",
  });
  res.status(201).json({
    status: "success",
    data: tvShow,
  });
});

exports.getAtvShow = catchAsync(async (req, res) => {
  const tvShow = await TvShow.findById(req.params.id);
  res.status(201).json({
    status: "success",
    data: tvShow,
  });
});

exports.updateAtvShow = catchAsync(async (req, res) => {
  const tvShow = await TvShow.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({
    status: "success",
    data: tvShow,
  });
});

exports.deleteAtvShow = catchAsync(async (req, res) => {
  await TvShow.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
  });
});
