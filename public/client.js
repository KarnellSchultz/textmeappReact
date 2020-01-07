init();

const pageElement = document.getElementById('body');
const updateButton = document.getElementById('updateColor');
const upcomingcolor = document.getElementById('upcomingcolor');
const moreColors = document.getElementById('more-colors');
const moreColorsButton = document.getElementById('more-colors-button');
const colorItem = document.getElementById('color-item');

let color;

async function init() {
	let data = await fetch('/startcolor');
	color = await data.json();
	console.log(data, color);
	pageElement.style.background = color;
	upcomingcolor.innerHTML = color;
}

// pageElement.style.background = color;
// upcomingcolor.innerHTML = color;

async function updateColors() {
	let colorData = await fetch('/colors');
	color = await colorData.json();
	pageElement.style.background = color;
	console.log(`The color is: ${color}`);
	upcomingcolor.innerHTML = color;
	updateTimeStamp();
}

let listItems = document.getElementsByTagName('li');
if (listItems.length > 12) {
	moreColors.parentNode.removeChild(moreColors);
	console.log('removing elments');
}

console.log(colorItem);

let updateTimestamp;
function updateTimeStamp() {
	updateTimestamp = new Date().toLocaleDateString();
	return updateTimestamp;
}

let showColors = new Vue({
	el: '#vueList',
	data: {
		items: [{ message: '' }]
	}
});

new Vue({
	el: '#more-button',
	methods: {
		color: function() {
			vueListUpdate();
		}
	}
});

vueListUpdate();
async function vueListUpdate() {
	let colorListData = await fetch('/colorsList');
	let colorList = await colorListData.json();
	showColors.items = [];
	colorList.forEach((element, index) => {
		showColors.items.push({ message: element });
	});
}

setInterval(updateColors, 10000);
