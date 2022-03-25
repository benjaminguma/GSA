const mongoose = require ('mongoose');
const {days, ...utils} = require ('../pUtils/utils');
const schema = mongoose.schema;
const config = {
  getters: true,
  virtuals: true,
};

const category = new mongoose.Schema (
  {
    category: {
      type: String,
      enum: ['regular', 'special'],
    },
    events: [{type: mongoose.Schema.Types.ObjectId, ref: 'Events'}],
    count: {
      type: Number,
      set: function () {
        return this.events.length;
      },
    },
  },
  {
    toJSON: config,
    toObject: config,
  }
);

category.statics = {
  async getEventsinInMonth({page, limit, date}) {
    const [from, to] = utils.getBegAndEndOfMonth (date);
    return this.findOne ({category: 'special'}).populate ({
      path: 'events',
      options: {
        sort: {date: -1},
        skip: page * limit,
        limit,
      },
      match: {
        $and: [{$gte: ['$date', from]}, {$lte: ['$date', to]}],
      },
    });
  },
  async getEventsOnDay (category) {
    const today = days[new Date ().getDay ()];
    return await this.find ({category})[0].populate ({
      path: 'events',
      match: {
        today,
      },
    });
  },

  async getEventsInTime({from, to, page, limit}) {
    [from, to] = utils.cleanDates (from, to);
    if (category === 'special') {
      return await this.find ({category})[0].populate ({
        path: 'events',
        options: {
          limit: limit,
          skip: page * limit,
        },
        match: {
          $and: [{$gte: ['$date', from]}, {$lte: ['$date', to]}],
        },
      });
    }
  },

  async addEvent (id, category) {
    return this.findOneAndUpdate (
      {
        category,
      },
      {
        $push: {events: id},
        $inc: {count: 1},
      }
    );
  },
};

module.exports = mongoose.model ('category', category);
