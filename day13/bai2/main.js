function isValidEmail(input) {
	return /^\S+@\S+\.\S+$/.test(input);
}

function regsiter(e) {
	e.preventDefault();

	var check = true;

	let listInput = document.getElementsByClassName("inputText");
	for (let input of listInput) {
		input.nextElementSibling.innerText = "";

		if (input.value == "") {
			input.nextElementSibling.innerText = "Bắt buộc phải nhập!";
			check = false;
		} else {
			if (
				input.getAttribute("name") == "hoten" &&
				isNaN(input.value) == false
			) {
				input.nextElementSibling.innerText = "Họ tên phải là chữ!";
				check = false;
			}
			if (
				input.getAttribute("type") == "email" &&
				isValidEmail(input.value) == false
			) {
				input.nextElementSibling.innerText = "Sai định dạng email!";
				check = false;
			}
			if (
				input.getAttribute("type") == "number" &&
				isNaN(input.value) == true
			) {
				input.nextElementSibling.innerText = "Tuổi phải nhập số!";
				check = false;
			}
		}
	}

	if (check == true) {
		alert("Dang ky thanh cong!");
	}
	return check;
}

let btnSubmit = document.getElementById("btnSubmit");

btnSubmit.addEventListener("click", regsiter);

let btnReset = document.querySelectorAll("input[type='reset']");

btnReset.addEventListener("click", () => {
	let listInput = document.getElementsByClassName("inputText");
	listInput.forEach((element) => {
		element.nextElementSibling.innerText = "";
	});
});
