const listImage = [
	"./images/photo-1648737966762-1c8921f9b976.avif",
	"./images/photo-1653764710659-7be4ba78cb09.avif",
	"./images/photo-1653856289655-fba958e7bdcf.avif",
	"./images/photo-1653866114444-4c8f42f0b60d.avif",
	"./images/photo-1653874403269-f4f0dba02f33.avif",
	"./images/photo-1653917207318-a0a2a8a72ff1.avif",
];

let index = 0;

let mySlide = document.getElementById("mySlide");
mySlide.src = listImage[0];

function image(position) {
	if (position == "previous") {
		index--;
		if (index < 0) {
			index = listImage.length - 1;
		}
	}
	if (position == "next") {
		index++;
		if (index >= listImage.length) {
			index = 0;
		}
	}
	if (position == "start") {
		function autoNext() {
			index++;
			if (index >= listImage.length) {
				index = 0;
			}
		}
		setInterval(autoNext, 1500);
	}
	mySlide.src = listImage[index];
}
