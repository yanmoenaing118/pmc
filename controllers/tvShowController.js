const TvShow = require("./../models/TvShow");

exports.getAlltvShows = async (req, res) => {
  try {
    const tvShows = await TvShow.find();
    res.status(200).json({
      status: "success",
      data: tvShows,
    });
  } catch (e) {
    console.error(e);
  }
};

exports.createtvShow = async (req, res) => {
  try {
    const tvShow = await TvShow.create(req.body);
    res.status(201).json({
      status: "success",
      data: tvShow,
    });
  } catch (e) {
    console.log(e);
  }
};

exports.getAtvShow = async (req, res) => {
  try {
    const tvShow = await TvShow.findById(req.params.id);
    res.status(201).json({
      status: "success",
      data: tvShow,
    });
  } catch (e) {
    console.error(e);
  }
};

exports.updateAtvShow = async (req, res) => {
  try {
    const tvShow = await TvShow.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      status: "success",
      data: tvShow,
    });
  } catch (e) {
    console.error(e);
  }
};

exports.deleteAtvShow = async (req, res) => {
  await TvShow.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
  });
  try {
  } catch (e) {
    console.error(e);
  }
};
