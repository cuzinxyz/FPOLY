let imageObject = [];
let index = 0;
let intervalId;

function loadImage() {
	const listImage = [
		"./images/photo-1648737966762-1c8921f9b976.avif",
		"./images/photo-1653764710659-7be4ba78cb09.avif",
		"./images/photo-1653856289655-fba958e7bdcf.avif",
		"./images/photo-1653866114444-4c8f42f0b60d.avif",
		"./images/photo-1653874403269-f4f0dba02f33.avif",
		"./images/photo-1653917207318-a0a2a8a72ff1.avif",
	];
	listImage.forEach(function (e) {
		let img = new Image();
		img.src = e;
		imageObject.push(img);
	});

	document.imgList.src = imageObject[index].src;
}

function previous() {
	index--;
	if (index < 0) {
		index = imageObject.length - 1;
	}
	document.imgList.src = imageObject[index].src;
}

function start() {
	if (intervalId === undefined) {
		intervalId = setInterval(function () {
			next();
		}, 1000);
	}
}

function stop() {
	clearInterval(intervalId);
	intervalId = undefined;
}

function next() {
	index++;
	if (index >= imageObject.length) {
		index = 0;
	}
	// B4: Xet anh vao HTML
	document.imgList.src = imageObject[index].src;
}
