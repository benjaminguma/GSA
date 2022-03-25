const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const months = [
	'january',
	'febuary',
	'march',
	'april',
	'may',
	'june',
	'july',
	'august',
	'september',
	'october',
	'november',
	'december',
];
const day = 24 * 60 * 60 * 1000;
const getMonthDay = (date) => /\W(\d+)T/.exec(new Date(date).toISOString())[1];
const getMonthDays = (month, year = new Date().getFullYear()) => {
	let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	// febuary
	if (month == 1) {
		if (year % 4 === 0) {
			return 29;
		}
	}

	return monthDays[month];
};

const getBegAndEndOfMonth = (date) => {
	date = cleanDate(Number(date));
	date = new Date(date);

	// e.g 15th or 12th
	const thisMonthDay = Number(date.getDate());
	const month = date.getMonth();
	const thisMonthDays = getMonthDays(month);
	console.log({ thisMonthDay, thisMonthDays });

	date = date.getTime();
	let daysLeft = thisMonthDays - thisMonthDay,
		start,
		end;

	start = date - thisMonthDay * day;
	end = date + daysLeft * day;

	return [start, end];
};

function getDaysSpanned(from, to) {
	const dateFrom = new Date(from);
	//  the day e.g sunday when we started
	let startDay = days.indexOf(days[dateFrom.getDay()]);
	//  days inbetween from and to
	const daysDiff = Math.round(Math.abs((to - from) / day));
	console.log({ daysDiff });
	//  checks if number of days span one or more weeks
	if (daysDiff >= 7) return days;
	// start at the fist day and get the other days
	const daysSpanned = [];
	for (let i = startDay; i < daysDiff; i++) daysSpanned.push(days[i % 7]);
	return daysSpanned;
}

function cleanDate(num) {
	const date = new Date(Number(num));
	const date_hours = (date.getHours() - 1) * 60 * 60 * 1000;
	const date_mins = date.getMinutes() * 60 * 1000;
	const date_secs = date.getSeconds() * 1000;

	return new Date(date - date_hours - date_mins - date_secs - date.getMilliseconds()).getTime();
}

const tommDate = (todaysDate) => {
	const clean_todays_date = cleanDate(new Date(todaysDate));
	return new Date(clean_todays_date.getTime() + 1000 * 3600 * 24);
};

const getTodaysDate = () => cleanDate(new Date());

const setMonthDayAndYear = (object, date = new Date(this.date)) => {
	if (!object.month && !object.days.length) {
		object.month = months[date.getMonth()];
	}
	if (!object.year) object.year = date.getFullYear();
	// this should be executed for only special events...
	if (!object.days) object.days = days[date.getDay()];
	const monthDate = getMonthDay(date);
	if (!object.monthDate) object.monthDate = monthDate;

	return object;
};

const getBegAndEnd = (from, to) => {
	return [cleanDate(from), cleanDate(to)];
};

const getWeekCount = (date) => {
	// today
	let todaysDate;
	todaysDate = date ? cleanDate(date.getTime()) : getTodaysDate();
	const [beg, _] = getBegAndEndOfMonth(todaysDate);
	console.log(new Date(beg));
	const data = {
		date: todaysDate,
		startOfMonth: new Date(beg),
		dateBeginOfMonth: beg,
		dayBeginOfMonth: new Date(beg).getDay(),
		daysDifference: (todaysDate - beg) / day + 1,
		monthDate: new Date(todaysDate),
	};
	console.log(data);
	let diff = data.dayBeginOfMonth === 0 ? 0 : data.dayBeginOfMonth + 1;
	let week = 1,
		start,
		end,
		variableJump,
		// some months start on sunday and that day is zero so we have to take it to saturday by 6--1 aha
		rDays2ClosestSat = 7 - diff,
		target;

	// this is when we are in the first week and the todays date comes before a saturday
	if (data.dayBeginOfMonth !== 7 && data.daysDifference <= rDays2ClosestSat) {
		return week;
	}

	// console.log ({rDays2ClosestSat});
	start = data.dateBeginOfMonth + rDays2ClosestSat * day;
	end = data.daysDifference;
	//
	variableJump = data.monthDate.getDay() + 1;
	target = data.monthDate.getDate();
	data.daysDifference -= rDays2ClosestSat;

	console.log(new Date(start).getDate());

	while (new Date(start).getDate() !== target) {
		let variableJumpDate = new Date(start + variableJump * day).getDate();
		let oneWeekJump = 7 * day;

		if (variableJumpDate === target) {
			week += 1;
			return week;
		}
		start += oneWeekJump;
		week++;
	}
	return week;
};

const getDayNoInMonth = (day) => {
	let count = 1;

	while (day > 7) {
		count++;
		day -= 7;
	}
	return count;
};
module.exports = {
	getWeekCount,
	cleanDate,
	tommDate,
	getTodaysDate,
	days,
	months,
	setMonthDayAndYear,
	getBegAndEnd,
	getBegAndEndOfMonth,
	getDaysSpanned,
	getDayNoInMonth,
};

// console.log (cleanDate (1636595200000));
// console.log (getWeekCount (new Date ('2022-1-31')));
// console.log (getDayNoInMonth (new Date ('2021-3-7').getDate ()));
