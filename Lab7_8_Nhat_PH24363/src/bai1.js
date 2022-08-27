let myImage = document.getElementById("myIMG");

const listImage = [
	"./images/1.avif",
	"./images/2.avif",
	"./images/3.avif",
	"./images/4.avif",
	"./images/5.avif",
];

let index = 0;

myImage.src = listImage[index];

function auto() {
	index++;

	if (index > listImage.length - 1) {
		index = 0;
	}

	myImage.src = listImage[index];
}

setInterval(auto, 1500);
