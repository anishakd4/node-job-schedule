const express = require('express');
const app = express();
app.listen(3001, () => {
	console.log('Server started at port 3001');
});

const mailer = require('nodemailer');
const transporter = mailer.createTransport({
	host: 'smtp.gmail.com',
	port: 587,
	auth: {
		user: 'kumaranishdubey2022@gmail.com',
		pass: '****************',
	},
});

//sending the email
function sendEmail(message) {
	transporter
		.sendMail({
			from: '"Anish" <kumaranishdubey2023@gmail.com>',
			to: '"Anish" <kumaranishdubey2022@gmail.com>',
			subject: 'Scheduled Job Email',
			text: message,
		})
		.then((_) => {
			console.log('Email sent on ' + new Date());
		})
		.catch((error) => {
			console.log(error);
		});
}

const cron = require('node-cron');
// cron run at every 10 min
cron.schedule('*/1 * * * *', function () {
	sendEmail('Hey User, this email was sent to you automatically');
});
