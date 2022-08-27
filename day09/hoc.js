// * TRUY XUẤT PHẦN TỬ TRONG DOM:
// * - ID: document.getElementById
// * - ClassName: document.getElementByClassName
// * - TagName: document.getElementByTagName
// * - CSS Selector:
//      + element selector p{}
//      + class selector .class{}
//      + id selector #id {}
//      + * {} tat ca the

const text = document.getElementById("text");

text.style.color = "red";

text.innerHTML = "ID thay doi sang mau do";

// * TRUY XUAT CLASSNAME
let x1 = document.getElementsByClassName("content");
// ! Class co the co nhieu nen khi truy xuat x1 se la mang chua cac phan tu
// todo vi du chinh sua phan tu content thu nhat
x1[0].style.color = "red";
// todo thay doi mau toan bo classname
for (let i; i < x1.length; i++) {
	x1[i].style.color = "blue";
}

// Truy xuat phan tu bang tag name
let x3 = document.getElementsByTagName("p");
console.log(x3.length);

// Truy xuat phan tu bang CSS Selector
let x4 = document.querySelectorAll("div p");
console.log(x4.length);

// function show anh.
function showanh() {
	let hienthi = document.getElementById("hienthi");
	hienthi.innerHTML =
		'<img src="https://www.w3schools.com/tags/img_girl.jpg" alt="Girl in a jacket" width="500" height="600">';
}

// todo Nhap 2 o button, button cong

function cong() {
	let num1 = document.getElementById("number1").value;
	let num2 = document.getElementById("number2").value;
	let showResult = document.getElementById("result");

	let result = Number(num1) + Number(num2);

	showResult.innerHTML = result;
}
function tru() {
	let num1 = document.getElementById("number1").value;
	let num2 = document.getElementById("number2").value;
	let showResult = document.getElementById("result");

	let result = Number(num1) - Number(num2);

	showResult.innerHTML = result;
}
function nhan() {
	let num1 = document.getElementById("number1").value;
	let num2 = document.getElementById("number2").value;
	let showResult = document.getElementById("result");

	let result = Number(num1) * Number(num2);

	showResult.innerHTML = result;
}
function chia() {
	let num1 = document.getElementById("number1").value;
	let num2 = document.getElementById("number2").value;
	let showResult = document.getElementById("result");

	let result = Number(num1) / Number(num2);

	showResult.innerHTML = result;
}
