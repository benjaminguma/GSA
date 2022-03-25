const { string } = require('joi');
const mongoose = require('mongoose');

const { months, days, ...utils } = require('../pUtils/utils');

const schema = mongoose.Schema;

const req = {
	type: 'String',
	lowercase: true,
	trim: true,
	required: true,
};

const event = new schema(
	{
		title: req,

		eventType: {
			type: String,
			enum: ['special', 'regular', 'grand'],
			...req,
		},
		speaker: { ...req, required: false },
		description: {
			type: 'String',
			required: true,
			minlength: 10,
		},

		cover: {
			type: String,
			alias: 'image',
			get: (v) => `/public/events/${v}`,
		},

		location: {
			type: String,
			required: false,
		},
		participants: String,
		duration: {
			type: 'Number',
			required: [true, 'how long will this event last please'],
		},

		month: {
			type: String,
			enum: months,
			lowercase: true,
		},
		days: {
			type: [{ type: String, enum: days, ...req }],
		},
		reportNextTime: {
			type: Boolean,
			default: true,
		},
		reportTomorrow: {
			type: Boolean,
			default: true,
		},
		monthDate: {
			type: Number,
		},
		date: {
			type: Number,
			index: true,
		},
		week: {
			type: Number,
			required: [true, 'specify the day count'],
		},
		dayCount: {
			type: Number,
			default: 0,
			required: [true, 'specify the day count'],
		},
		time: {
			type: 'String',
			required: [true, 'what time is the event?'],
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
	},
);

// event.virtual("trueDate").get(function(){

// })

event.statics = {
	async getAllEvents() {
		return await this.find({}).sort({ date: -1 });
	},
	async getEventsForMonth({ date, page = 0, limit = 5 }) {
		const [from, to] = utils.getBegAndEndOfMonth(date);
		console.log({ from, to });

		return await this.getEventsInTime({ from, to, limit: 50 });
	},
	async getEventsOnDay(date) {
		const todaysDate = utils.cleanDate('2021-02-14T00:00:00.000Z');
		return await this.find({
			$or: [{ date: { $eq: 0 } }, { date: { $eq: todaysDate } }],
			day: days[new Date(todaysDate).getDay()],
		});
	},
	async getEvent(id) {
		return await this.findById(id);
	},

	async createEvent(eventDetails) {
		const event = new this({ ...eventDetails });

		await event.validate();

		await event.save();

		return;
	},
	async deleteEvents(eventIds) {
		const deletedEvent_s = await this.deleteMany({
			id: { $in: eventIds },
		});

		return;
	},

	async updateEvent(eventToUpdate) {
		return await this.updateOne(
			{
				id: eventToUpdate.id,
			},
			eventToUpdate,
			{
				runValidators: true,
			},
		);
	},
	async getEventsInTime({ from, to, page = 0, limit = 3 }) {
		from = utils.cleanDate(from);
		to = utils.cleanDate(to);

		let Q1 = { date: { $eq: 0 } };
		const daysSpanned = utils.getDaysSpanned(from, to);
		console.log({ daysSpanned });
		if (daysSpanned.length === 7)
			Q1 = {
				$and: [{ date: 0 }, { day: { $in: days } }],
			};
		else
			Q1 = {
				$and: [{ date: 0 }, { day: { $in: daysSpanned } }],
			};

		console.log(Q1);
		return await this.find({
			$or: [Q1, { date: { $gte: from, $lte: to } }],
		});
	},
};

event.pre('save', function (error, doc, next) {
	if (!this.date) return next();
	utils.setMonthDayAndYear(this);
	next();
});
const EventModel = mongoose.model('event', event);
module.exports = EventModel;
