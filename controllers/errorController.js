module.exports = (req, res, next) => {
  res.status(500).json({
    status: "fail",
    error: "An error occured",
  });
};
