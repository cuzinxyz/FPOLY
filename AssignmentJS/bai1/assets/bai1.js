let listImage = [
	"./bai1/images/1.jpg",
	"./bai1/images/2.jpg",
	"./bai1/images/3.jpg",
	"./bai1/images/4.jpg",
	"./bai1/images/5.jpg",
	"./bai1/images/6.jpg",
	"./bai1/images/7.jpg",
];

let index = 0;

let position = document.getElementById("position--image");

let image = document.getElementById("image");

image.setAttribute("src", listImage[index]);

position.innerHTML = `Ảnh ${index - -1} / ${listImage.length}`;

function previous() {
	index--;

	if (index < 0) {
		index = listImage.length - 1;
	}

	position.innerHTML = `Ảnh ${index + 1} / ${listImage.length}`;

	image.setAttribute("src", listImage[index]);
}

function next() {
	index++;

	if (index > listImage.length - 1) {
		index = 0;
	}

	position.innerHTML = `Ảnh ${index + 1} / ${listImage.length}`;

	image.setAttribute("src", listImage[index]);
}
