const User = require("./../models/User");
const catchAsync = require("./../utils/catchAsync");

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);
  res.status(201).json({
    status: "success",
    data: newUser,
  });
});

exports.login = catchAsync(async (req, res, next) => {
  // find the user with email
  // check the crendentials
});

exports.protect = catchAsync(async (req, res, next) => {
  // the protected routes
  // get the needed token to access the api in details
});
