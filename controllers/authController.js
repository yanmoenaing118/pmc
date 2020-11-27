const promisify = require("util").promisify;
const jwt = require("jsonwebtoken");
const User = require("./../models/User");
const catchAsync = require("./../utils/catchAsync");

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);
  // create token and send the token

  const token = await promisify(jwt.sign)(
    { id: newUser.id },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: process.env.JWT_TOKEN_EXPIRES,
    }
  );

  res.status(201).json({
    status: "success",
    token,
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
    const token = await promisify(jwt.sign)(
      { id: user.id },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: process.env.JWT_TOKEN_EXPIRES,
      }
    );
    return res.status(200).json({
      status: "success",
      token,
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

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token =
      req.headers.authorization.split(" ")[1] != "{{jwt}}"
        ? req.headers.authorization.split(" ")[1]
        : null;
  }

  if (!token) {
    return next(new Error("You are not logged in. Please log in to access"));
  }

  let decoded;

  try {
    decoded = await promisify(jwt.verify)("axbd", process.env.JWT_SECRET_KEY);
  } catch (e) {
    return next(new Error(e.message));
  }

  const user = await User.findById(decoded.id);

  if (!user) {
    next(new Error("The user belogining to this token doens't exist"));
  }

  req.user = user;

  next();
});
