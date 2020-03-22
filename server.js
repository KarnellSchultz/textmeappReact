const express = require('express');
const app = express();
require('dotenv').config();
const accountSid = process.env.ACCOUNTSID;
const authToken = process.env.AUTHTOKEN;
const Datastore = require('nedb'),
	db = new Datastore({ filename: 'database.db', autoload: true });

const MessagingResponse = require('twilio').twiml.MessagingResponse;
const client = require('twilio')(accountSid, authToken);
var http = require('http');
var twilio = require('twilio');

const port = process.env.PORT || 3007;
const listener = app.listen(port, () => {
	console.log(`TextMe App running on:${port}`);
});

app.use(express.urlencoded({ extended: false }));
// app.use(express.json({ limit: "100kb" })); //keeps ppl from blowing me up
app.use(express.static('public')); //serves the content of my public folder.

app.get('/', (req, res) => {
	res.send(`${req} :This is server info`);
});

app.get('/reply', (req, res) => {
	let data = 'this is the /reply endpoint';
	res.send(data);
});

//hooks/sms is a webhook being hit by Twilio each time a message is received
app.post('/hooks/sms', async (req, res) => {
	// console.log(req.body);
	let { Body, ToCountry, SmsStatus, FromCountry } = req.body;
	// console.log(Body);
	let incomingTextContent = await req.body.Body;
	let inputColor = validateIncomingText(incomingTextContent);

	//attempting to protect against users sending bad inputs and a sms sending anyway.
	if (inputColor == undefined) {
		console.log('Received a bad input', incomingTextContent);
		db.insert({
			status: '404',
			error: incomingTextContent,
			request: [
				req.body.ToCountry,
				req.body.ToState,
				req.body.SmsStatus,
				req.body.Body,
			],
			timestamp: new Date().toLocaleDateString(),
		});
	} else {
		db.insert({
			status: '200',
			request: [
				req.body.ToCountry,
				req.body.ToState,
				req.body.SmsStatus,
				req.body.Body,
			],
			color: inputColor,
			timestamp: new Date().toLocaleDateString(),
		});

		updateColor(inputColor);
		const twiml = new MessagingResponse();
		twiml.message(
			`Click the Update page color button to see your color: ${inputColor}`,
		);
		// res.writeHead(200, { 'Content-Type': 'text/xml' });
		res.end(twiml.toString());
	}
});

function validateIncomingText(userTextInput) {
	userTextInput.toLowerCase();
	let inputArray = userTextInput.split(' ');

	for (let i = 0; i < inputArray.length; i += 1)
		for (let j = 0; j < CssColorNames.length; j += 1) {
			if (inputArray[i].toLowerCase() == CssColorNames[j].toLowerCase()) {
				console.log('Color found ' + CssColorNames[j]);
				return CssColorNames[j];
			}
		}
}

let colors;
function updateColor(incomingTextContent) {
	colors = incomingTextContent;
}

app.get('/colors', async (req, res) => {
	if (colors !== undefined) {
		console.log('color info is: ' + colors);
		res.json(colors);
	}
});

app.get('/hooks/sms', (req, res) => {
	let data = 'Make a POST to this page cuz';
	res.send(data);
});

app.get('/colorsList', (req, res) => {
	let colorResults = fiveColorArray();
	res.json(colorResults);
});

app.get('/startcolor', (req, res) => {
	console.log('/startcolor hit');
	client.messages.list({ limit: 1 }).then(messages =>
		messages.forEach(m => {
			let startColorResult = validateIncomingText(m.body);
			// console.log(startColorResult, "startColorResult");
			res.json(startColorResult);
		}),
	);
});

// function fiveColorArray() {
//   let fiveColors = [];
//   for (let i = 1; i <= 5; i += 1) {
//     let randomElement = getRandomInt(CssColorNames.length - 1);
//     fiveColors.push(CssColorNames[randomElement]);
//   }
//   return fiveColors;
// }

// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }

// client.messages.list({limit: 3})
//                .then(messages => messages.forEach(m =>
//         console.log(m.sid, m.status, m.dateSent, m.to, m.price, m.body )));

const CssColorNames = [
	'AliceBlue',
	'AntiqueWhite',
	'Aqua',
	'Aquamarine',
	'Azure',
	'Beige',
	'Bisque',
	'Black',
	'BlanchedAlmond',
	'Blue',
	'BlueViolet',
	'Brown',
	'BurlyWood',
	'CadetBlue',
	'Chartreuse',
	'Chocolate',
	'Coral',
	'CornflowerBlue',
	'Cornsilk',
	'Crimson',
	'Cyan',
	'DarkBlue',
	'DarkCyan',
	'DarkGoldenRod',
	'DarkGray',
	'DarkGrey',
	'DarkGreen',
	'DarkKhaki',
	'DarkMagenta',
	'DarkOliveGreen',
	'DarkOrange',
	'DarkOrchid',
	'DarkRed',
	'DarkSalmon',
	'DarkSeaGreen',
	'DarkSlateBlue',
	'DarkSlateGray',
	'DarkSlateGrey',
	'DarkTurquoise',
	'DarkViolet',
	'DeepPink',
	'DeepSkyBlue',
	'DimGray',
	'DimGrey',
	'DodgerBlue',
	'FireBrick',
	'FloralWhite',
	'ForestGreen',
	'Fuchsia',
	'Gainsboro',
	'GhostWhite',
	'Gold',
	'GoldenRod',
	'Gray',
	'Grey',
	'Green',
	'GreenYellow',
	'HoneyDew',
	'HotPink',
	'IndianRed',
	'Indigo',
	'Ivory',
	'Khaki',
	'Lavender',
	'LavenderBlush',
	'LawnGreen',
	'LemonChiffon',
	'LightBlue',
	'LightCoral',
	'LightCyan',
	'LightGoldenRodYellow',
	'LightGray',
	'LightGrey',
	'LightGreen',
	'LightPink',
	'LightSalmon',
	'LightSeaGreen',
	'LightSkyBlue',
	'LightSlateGray',
	'LightSlateGrey',
	'LightSteelBlue',
	'LightYellow',
	'Lime',
	'LimeGreen',
	'Linen',
	'Magenta',
	'Maroon',
	'MediumAquaMarine',
	'MediumBlue',
	'MediumOrchid',
	'MediumPurple',
	'MediumSeaGreen',
	'MediumSlateBlue',
	'MediumSpringGreen',
	'MediumTurquoise',
	'MediumVioletRed',
	'MidnightBlue',
	'MintCream',
	'MistyRose',
	'Moccasin',
	'NavajoWhite',
	'Navy',
	'OldLace',
	'Olive',
	'OliveDrab',
	'Orange',
	'OrangeRed',
	'Orchid',
	'PaleGoldenRod',
	'PaleGreen',
	'PaleTurquoise',
	'PaleVioletRed',
	'PapayaWhip',
	'PeachPuff',
	'Peru',
	'Pink',
	'Plum',
	'PowderBlue',
	'Purple',
	'RebeccaPurple',
	'Red',
	'RosyBrown',
	'RoyalBlue',
	'SaddleBrown',
	'Salmon',
	'SandyBrown',
	'SeaGreen',
	'SeaShell',
	'Sienna',
	'Silver',
	'SkyBlue',
	'SlateBlue',
	'SlateGray',
	'SlateGrey',
	'Snow',
	'SpringGreen',
	'SteelBlue',
	'Tan',
	'Teal',
	'Thistle',
	'Tomato',
	'Turquoise',
	'Violet',
	'Wheat',
	'White',
	'WhiteSmoke',
	'Yellow',
	'YellowGreen',
];
