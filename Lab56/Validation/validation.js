function regsiter(e) {
	e.preventDefault();
	// goi cac o input
	let inputList = document.getElementsByClassName("inputText");

	// kiem tra cac o input

	for (let inputItem of inputList) {
		// reset error ve ban dau
		inputItem.nextElementSibling.innerText = "";

		// check input rong
		if (inputItem.value == "") {
			inputItem.nextElementSibling.innerText = "Bat buoc phai nhap";
		} else {
			// check mail
			if (
				inputItem.getAttribute("type") == "email" &&
				isValidEmail(inputItem.value) === false
			) {
				inputItem.nextElementSibling.innerText = "Sai dinh dang email";
			}

			// check pass
			let password = document.getElementById("passw").value;
			let repassword = document.getElementById("repassw").value;

			if (
				inputItem.getAttribute("type") == "password" &&
				password.length < 6 &&
				repassword.length < 6
			) {
				inputItem.nextElementSibling.innerText =
					"Password khong duoc nho hon 6 ki tu";
			}

			if (
				inputItem.getAttribute("type") == "password" &&
				password != repassword
			) {
				inputItem.nextElementSibling.innerText =
					"Password phai trung nhau";
			}
		}
	}
}

function isValidEmail(email) {
	return /^\S+@\S+\.\S+$/.test(email);
}

let btnSubmit = document.getElementById("btnSubmit");

btnSubmit.addEventListener("click", regsiter);
