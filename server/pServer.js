require('dotenv').config({ path: './pRoutes/.env' });
const express = require('express');
const webPush = require('web-push');
const b64 = require('url-safe-base64');
const app = express();
// Routers
const MsgRouter = require('./pRoutes/message');
const EvtRouter = require('./pRoutes/event');
const cronJob = require('node-cron');
const CatRouter = require('./pRoutes/cetegory');

// const keys= webPush.generateVAPIDKeys();
// console.log({keys})
// Db
const x = b64.trim(b64.encode(process.env.PUBLIC_KEY));

const db = require('./p_models/db');
const { json } = require('body-parser');
const { request } = require('express');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// port

// the contents of this p object was for testing only pls generate a new object from the client by allowing the client accept to receive push notificationx
const p = {
	endpoint:
		'https://fcm.googleapis.com/fcm/send/c10rBHI1BAA:APA91bGm9E8_PHGuJQ6RKvcLL4juAwuX_JKhoFBocv8FnvHmSlyvBhRfObXk6lWRMb3DAUwryHc2-9utBxP-QuDTslRw5YwYWaZBRADCrNl4kcYXnJQ4CNwnmEXNIEeHxGimv6f_fAA7',
	expirationTime: null,
	keys: {
		p256dh: 'BJZhc-cNqB_zNc6UZUqnQ2iGDnl-_rc-8Gut8dWAARjNTVOsAfWLnWjI3KiAyfcTMlZfmvUFCWViAYkoaAnpBRE',
		auth: 'cntG_R-nMC1pCiVfxTZ-dQ',
	},
};
const options = {
	vapidDetails: {
		subject: 'mailto:benjaminguma.bg@gmail.com',
		publicKey: process.env.PUBLIC_KEY,
		privateKey: process.env.PRIVATE_KEY,
	},
};

cronJob.schedule(
	'*/8 * * * *',
	async () => {
		console.log('hi');
		try {
			const res2 = await webPush.sendNotification(
				p,
				JSON.stringify({
					title: 'valentines day',
					description: 'merryment on gaad',
				}),
				options,
			);
		} catch (error) {
			console.log(error);
			res.sendStatus(400);
		}
	},
	{
		//  set this to true to make the cronjob run
		scheduled: false,
	},
);
const port = process.env.PORT;

console.log(port);

app.use('/message', MsgRouter);
app.use('/events', EvtRouter);
app.use('/category', CatRouter);

app.post('/subscribe', async (req, res, next) => {
	console.log({ body: req.body });
	try {
		const res2 = await webPush.sendNotification(
			req.body,
			JSON.stringify({
				title: 'valentines day',
				description: 'merryment on gaad',
			}),
			options,
		);

		console.log({ res2 });
		// res2.sendStatus (200);
	} catch (error) {
		console.log(error);
		res.sendStatus(400);
	}
	// res.sendStatus (201);
});

app.use((error, req, res, next) => {
	let { message, code, type } = error;
	console.log({ message, code, type });
	if (!res.headersSent) {
		code = code ? code : 500;
		message = message ? message : 'an error occured please try again';

		res.status(code).json({ message });
	}
});
db.connectToDb()
	.then((db) => {
		console.log('ok');
		app.listen(port, () => console.log(`app running live on ${port}`));
	})
	.catch((err) => {
		console.log('erreeeeoo');
		console.log(err.message);
		process.exit(1);
	});
