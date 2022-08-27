let hoTen = document.querySelector("#hoten");
let email = document.querySelector("#email");
let tuoi = document.querySelector("#tuoi");
let form = document.querySelector("form");

function showError(input, message) {
	let parent = input.parentElement;
	let error = parent.querySelector("#error");
	error.classList.add("error"); // them class vao the span
	error.innerText = message;
}
function showSuccess(input, message) {
	let parent = input.parentElement;
	let error = parent.querySelector("#error");
	error.classList.remove("error"); // them class vao the span
	error.innerText = "";
}

function checkEmptyError(listInput) {
	let isEmptyError = false;
	listInput.forEach((input) => {
		input.value = input.value.trim();
		if (!input.value) {
			isEmptyError = true;
			showError(input, "Không được để trống!");
		} else {
			showSuccess(input);
		}
	});
	return isEmptyError;
}
function checkEmailError(input) {
	const regexEmail =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	input.value = input.value.trim();

	let isEmailError = !regexEmail.test(input.value);
	if (regexEmail.test(input.value)) {
		showSuccess(input);
	} else {
		if (!email.value) {
		} else {
			showError(input, "Sai định dạng Email!");
		}
	}
	return isEmailError;
}

function isNumber(input) {
	return /[0-9]/.test(input);
}

function checkTen(input) {
	input.value = input.value.trim();
	if (!input.value) {
	} else {
		if (isNumber(input.value) == true) {
			showError(input, "Họ tên phải là chữ!");
		} else {
			showSuccess(input);
			var loiTen = 0;
		}
	}
}

function checkAge(input) {
	input.value = input.value.trim();
	if (!input.value) {
	} else {
		if (isNumber(input.value) == false) {
			showError(input, "Tuổi phải là số!");
		} else {
			showSuccess(input);
			var loiTuoi = 0;
		}
	}
}

form.addEventListener("submit", function (e) {
	e.preventDefault();
	let isEmptyError = checkEmptyError([hoTen, email, tuoi]);
	let isEmailError = checkEmailError(email);
	let isName = checkTen(hoTen);
	let isAge = checkAge(tuoi);

	if (loiEmail == 0 && loiTen == 0 && loiTuoi == 0) {
		alert("Gửi thành công!");
	}
});

const btnReset = document.getElementById("btnReset");
btnReset.onclick = () => {
	showSuccess(hoTen);
	showSuccess(email);
	showSuccess(tuoi);
	hoTen.value = "";
	email.value = "";
	tuoi.value = "";
};
