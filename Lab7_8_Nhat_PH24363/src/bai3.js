function onChangeLoaiHang() {
	let loaiHang = document.getElementById("loaihang");
	let donGia = document.getElementById("dongia");

	donGia.value = loaiHang.value;
}

function onChangeNoiNhan() {
	let noiNhan = document.getElementsByName("noiNhan");
	let phiVC = document.getElementById("phiVC");
	for (let input of noiNhan) {
		if (input.checked) {
			phiVC.value = input.value;
		}
	}
}

function register(e) {
	e.preventDefault();
	console.log("demo");
	let inputList = document.getElementsByClassName("inputText");

	for (let input of inputList) {
		input.nextElementSibling.innerText = "";

		if (input.value == "") {
			input.nextElementSibling.innerText = "Bắt buộc phải nhập!";
			input.nextElementSibling.style.color = "red";
		}
	}
}

function tinhTien() {
	let soLuong = document.getElementById("soluong");
	let donGia = document.getElementById("dongia");
	let thanhTien = document.getElementById("thanhTien");

	thanhTien.value = Number(soLuong.value) * Number(donGia.value);
}

const btnSubmit = document.getElementById("btnSubmit");
btnSubmit.addEventListener("click", register);
