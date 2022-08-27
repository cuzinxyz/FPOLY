// todo BAI TAP 1

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

// todo BAI TAP 2

function addsp() {
	var resultHTML = document.getElementById("btn");
	var content = document.getElementById("content").value;

	console.log(content);
	resultHTML.insertAdjacentHTML(
		"afterend",
		`<br><span class="child">${content}</span>`
	);
}

function removeSP() {
	let btndel = document.getElementById("btn-delete");

	btndel.parentElement.parentElement.remove(btndel);
}
