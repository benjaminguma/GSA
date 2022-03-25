const mongoose = require("mongoose");

const connectToDb = async () =>
  await mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  });
module.exports = { connectToDb };
