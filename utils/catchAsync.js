module.exports = function (cb) {
  return async function (req, res, next) {
    cb(req, res, next).catch(next);
  };
};
