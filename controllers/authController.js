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
  const user = await User.findOne({
    email: req.body.email,
  });

  let success = false;

  if (
    !user ||
    !(await user.correctPassword(req.body.password, user.password))
  ) {
    success = false;
  } else {
    success = true;
  }

  if (success) {
    return res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } else {
    return res.status(404).json({
      status: "fail",
      error: {
        message: "Invalid email or password",
      },
    });
  }
});

exports.protect = catchAsync(async (req, res, next) => {});
