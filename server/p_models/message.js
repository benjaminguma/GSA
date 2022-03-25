const mongoose = require("mongoose");

const schema = mongoose.Schema;

const req = {
  type: "String",
  lowercase: true,
  trim: true,
  required: true,
};
const config = {
  virtuals: true,
  getters: true,
};
const message = new schema({
  previev: String,
  name: req,
  speaker: { ...req, alias: "artist", index: true },
  category: {
    ...req,
    enum: ["preaching", "song"],
    index: true,
  },
  genre: {
    type: [String],
    default: undefined,
  },
});
message.set("timestamps", true);
message.set("toJSON", config);
message.set("toObject", config);
message.set("autoIndex", true);
message.virtual("prevUrl").get(function () {
  return `/public/messages/${this._doc.preview}`;
});
message.statics = {
  async getMessages(query) {
    let { page, amount } = query;
    page = Number(page);
    amount = Number(amount);
    return await this.find()
      .sort({ name: 1 })
      .skip(page * amount)
      .limit(amount);
  },

  async search(query) {
    const { key, collection } = query;
    console.log(key);
    const regKey = new RegExp(key.trim(), "ig");

    return await mongoose.model("message").find({
      $or: [{ name: regKey }, { category: regKey }, { speaker: regKey }],
    });
  },
};

const MsgModel = mongoose.model("message", message);

module.exports = MsgModel;
