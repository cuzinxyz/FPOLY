let image = document.getElementById("myImg");

let listImage = [
	"./images/1.avif",
	"./images/2.avif",
	"./images/3.avif",
	"./images/4.avif",
	"./images/5.avif",
];

let index = 0;

image.src = listImage[index];

function start() {
	index++;

	if (index > listImage.length - 1) {
		index = 0;
	}

	image.src = listImage[index];
}

setInterval(start, 2000);
