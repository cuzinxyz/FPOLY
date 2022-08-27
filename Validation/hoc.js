let khoaHoc = document.getElementById("khoahoc");
let hocPhi = document.getElementById("hocphi");
let hoTen = document.getElementById("hoten");
let email = document.getElementById("email");
let phoneNumber = document.getElementById("phone");
let error = document.querySelectorAll(".error");
let btnRegister = document.getElementById("btn-regsiter");

function onChangeKhoaHoc() {
	hocPhi.value = khoaHoc.value;
}

function register() {
	// kiem tra cac o input
	let inputItems = document.getElementsByClassName("inputText");

	// ? vì getElementsByClassName trả về 1 mảng các giá trị
	// B2: Kiem tra cac o input
	for (let i = 0; i < inputItems.length; i++) {
		// lay ra doi tuong
		let inputItem = inputItems[i];

		// reset ve trang thai ban dau
		inputItem.nextElementSibling.innerText = "";
		inputItem.nextElementSibling.style.color = "red";
		inputItem.nextElementSibling.style.fontSize = "15px";

		// Kiem tra rong
		if (inputItem.value === "") {
			inputItem.nextElementSibling.innerText = "Bat buoc";
		} else {
			// kiem tra sdt
			if (
				inputItem.getAttribute("type") === "number" &&
				isNaN(inputItem.value) === true
			) {
				inputItem.nextElementSibling.innerText = "SDT khong hop le ";
			}

			// Kiem tra email
			if (
				inputItem.getAttribute("type") === "email" &&
				isValidEmail(inputItem.value) === false
			) {
				inputItem.nextElementSibling.innerText = "Email khong hop le ";
			}
		}
	}
}

// isValidEmail == true => Email dung dinh dang. false => sai dinh dang
function isValidEmail(email) {
	return /^\S+@\S+\.\S+$/.test(email);
}

btnRegister.addEventListener("click", register);
