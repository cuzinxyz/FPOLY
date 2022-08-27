function isValidEmail(input) {
	return /^\S+@\S+\.\S+$/.test(input);
}

function regsiter(e) {
	e.preventDefault();

	var check = true;

	// CHECK LOI INPUT
	let inputList = document.getElementsByClassName("inputText");
	for (let input of inputList) {
		// reset lỗi.
		input.nextElementSibling.innerText = "";
		input.style.backgroundColor = "#fff";

		// check input rong
		if (input.value == "") {
			input.nextElementSibling.innerText = "Bắt buộc phải nhập!";
			input.nextElementSibling.style.color = "red";
			input.style.backgroundColor = "#fff6e9";
			check = false;
		} else {
			if (
				input.getAttribute("type") == "email" &&
				isValidEmail(input.value) == false
			) {
				input.nextElementSibling.innerText = "Sai định dạng email!";
				input.nextElementSibling.style.color = "red";
				input.style.backgroundColor = "#fff6e9";
				check = false;
			}
		}
	}

	// biến báo lỗi
	let error = document.getElementsByClassName("error-message");

	// CHECK LOI INPUT RADIO, CHECKBOX, SELECT
	let gioitinh = document.getElementsByName("gioitinh");
	for (let i = 0; i < gioitinh.length; i++) {
		console.log(gioitinh[i].checked)
		if (gioitinh[i].checked === true) {
			error[0].innerText = "";
			break;
		} else {
			error[0].innerText = "Bắt buộc phải chọn giới tính!";
			check = false;
		}
	}

	// CHECK LOI SO THICH
	let listSoThich = document.getElementsByName("sothich")
	for(let sothich of listSoThich) {
		if(sothich.checked === true) {
			error[1].innerText = ""
			break;
		} else {
			error[1].innerText = "Bắt buộc phải chọn sở thích!"
			check = false;
		}
	}

	// CHECK QUOC TICH
	let quoctich = document.getElementById("quoctich")

	console.log(quoctich.value)
	if(quoctich.value === "") {
		error[2].innerText = "Bắt buộc phải chọn quốc tịch!"
		quoctich.style.backgroundColor = "#fff6e9"
		check = false;
	} else {
		error[2].innerText = ""
		quoctich.style.backgroundColor = "#fff";
	}

	// CHECK GHI CHU
	let textarea = document.getElementById("textarea");

	if(textarea.value.length > 200) {
		error[3].innerText = "Giá trị không được quá 200 kí tự!"
		textarea.style.backgroundColor = "#fff6e9"
		check = false;
	} else {
		error[3].innerText = ""
		textarea.style.backgroundColor = "#fff";
	}

	if(check == true) {
		alert("Đăng ký thành công!");
	}

	return check;

}

let btnSubmit = document.getElementById("btnSubmit");

btnSubmit.addEventListener("click", regsiter);
