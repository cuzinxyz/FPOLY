let myImage = document.getElementById("myIMAGE");

const listData = [
	"./images/1.avif",
	"./images/2.avif",
	"./images/3.avif",
	"./images/4.avif",
	"./images/5.avif",
];

let index = 0;

myImage.src = listData[index];

function previous() {
	index--;

	if (index < 0) {
		index = listData.length - 1;
	}

	myImage.src = listData[index];
}

function next() {
	index++;

	if (index > listData.length - 1) {
		index = 0;
	}

	myImage.src = listData[index];
}

let interval;

function start() {
	interval = setInterval(next, 1500);
}

function stop() {
	clearInterval(interval);
}
