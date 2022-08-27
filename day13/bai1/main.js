let donGia = document.querySelector("#donGia");
let loaihang = document.querySelector("#loaihang");
let phiVanChuyen = document.querySelector("#phiVC");
let noiNhan = document.getElementsByName("noinhan");
let thanhTien = document.getElementById("thanhTien");

function onChangeLoaiHang() {
	donGia.value = loaihang.value;
}

function onChangeNoiNhan() {
	for (let i = 0; i < noiNhan.length; i++) {
		if (noiNhan[i].checked) {
			phiVanChuyen.value = noiNhan[i].value;
			break;
		}
	}
}

function onChangeThanhTien() {
	let tien = 0;
	let soLuong = document.getElementById("soLuong");
	tien = Number(soLuong.value) * Number(donGia.value);
	thanhTien.value = tien;
}

function order(e) {
	e.preventDefault();

	let inputList = document.getElementsByClassName("inputText");

	for (let input of inputList) {
		// check rong
		if (input.value == "") {
			input.nextElementSibling.innerText = "Bắt buộc phải nhập !";
		} else {
		}
	}
}

let btnSubmit = document.getElementById("btnSubmit");

btnSubmit.addEventListener("click", order);
