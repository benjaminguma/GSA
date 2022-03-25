const {Schema} = require ('mongoose');
const mongoose = require ('mongoose');

const Subscriber = new Schema (
  {
    link: {
      type: String,
      required: true,
      index: true,
    },
    societies: {
      type: [String],
    },
  },
  {
    toJSON: {
      getters: true,
    },
    toObject: {
      getters: true,
    },
    timestamps: true,
    strictQuery: true,
  }
);

module.exports = mongoose.model ('subscriber', Subscriber);
