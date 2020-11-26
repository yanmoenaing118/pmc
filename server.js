const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({
  path: "./config.env",
});

const DB = process.env.LOCAL_DB_HOST;

const connect = () => {
  return mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  });
};

connect()
  .then((connection) => {
    console.log("DB connection success");
  })
  .catch((err) => {
    console.error(err);
  });

const PORT = process.env.PORT || 8000;

console.log(process.env.LOCAL_DB_HOST);
app.listen(PORT, () => {
  console.log(PORT);
});
