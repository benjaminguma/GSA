import dateFormat from 'dateformat';
export const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
export const months = [
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

export const getEventColor = (eventType) => {
	if (/regular/i.test(eventType)) return '#f809f8a1';
	return 'hsl(51, 100%, 60%)';
};
//  "dddd, mmmm dS, yyyy, h:MM:ss TT"
// Saturday, June 9th, 2007, 5:46:21 PM

export const getDate = (date) => dateFormat(date, ' mmmm dS, yyyy');

export const addTime = (t1 = '00:00', m) => {
	// console.log({
	// 	t1,
	// 	m,
	// });
	let [hr, min] = t1.trim().split(':');
	hr = Number(hr);
	min = Number(min);

	const mn = hr * 60 + min;
	const allTimeinMims = mn + m;
	const mins = Math.floor(allTimeinMims % 60);

	return `${Math.floor(allTimeinMims / 60)}:${mins === 0 ? '00' : mins} `;
};

export const timeToAmPM = (time) => {
	let [hr, min] = time.trim().split(':');

	return `${hr > 12 ? hr - 12 : hr}:${min}${hr > 12 ? 'PM' : 'AM'}`;
};
