const price = document.getElementById("dongia");
const soluong = document.getElementById("soluong");
const thanhtien = document.getElementById("thanhtien");
const btnSubmit = document.getElementById("btn-submit");
let result = 1;

btnSubmit.onclick = (e) => {
	e.preventDefault();
	result = Number(price.value) * Number(soluong.value);
	thanhtien.value = result;
	console.log(result);
};
//

function innerHTML(vara, message) {
	vara.innerHTML = message;
}

const resultIMG = document.querySelector(".result-img");
function img(value) {
	switch (value) {
		case 1:
			innerHTML(
				resultIMG,
				"<img src='./images/photo-1648737966762-1c8921f9b976.avif' />"
			);
			break;
		case 2:
			innerHTML(
				resultIMG,
				"<img src='./images/photo-1653764710659-7be4ba78cb09.avif' />"
			);
			break;
		case 3:
			innerHTML(
				resultIMG,
				"<img src='./images/photo-1653856289655-fba958e7bdcf.avif' />"
			);
			break;
	}
}

const text = document.getElementById("text-bai3");
const red = document.getElementById("red");
const blue = document.getElementById("blue");
red.onclick = () => {
	text.style.backgroundColor = "red";
	text.style.color = "white";
	text.style.display = "inline-block";
	text.style.padding = "10px";
};
blue.onclick = () => {
	text.style.backgroundColor = "blue";
	text.style.color = "white";
	text.style.display = "inline-block";
	text.style.padding = "10px";
};

function onMouseOverEvent() {
	document.getElementById("myImg").src =
		"./images/photo-1653874403269-f4f0dba02f33.avif";
}

function onMouseOutEvent() {
	document.getElementById("myImg").src =
		"./images/photo-1653917207318-a0a2a8a72ff1.avif";
}
