const mongoose = require("mongoose");
const Voter = require("./voter");
const plugin = require("../plugins/hook1");
const HttpError = require("../models/error");
const schema = mongoose.Schema;

const req = {
  type: "String",
  lowercase: true,
  trim: true,
  required: true,
};
