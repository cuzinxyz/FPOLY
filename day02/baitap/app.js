// bai 1
while (true) {
	var number1 = prompt("Nhap: ");
	if (isNaN(number1) == true) {
		alert(`${number1} khong phai la so.`);
	} else {
		if (number1 % 3 == 0) {
			alert(`${number1} la so va chia het cho 3.`);
			break;
		} else {
			alert(`${number1} la so khong chia het cho 3.`);
			break;
		}
	}
}

// bai 2
var number1 = prompt("Nhap so thu nhat: ");
var number2 = prompt("Nhap so thu hai: ");

var tong = Number(number1) + Number(number2);
var hieu = Number(number1) - Number(number2);
var tich = Number(number1) * Number(number2);
var thuong = Number(number1) / Number(number2);
var sodu = Number(number1) % Number(number2);

alert(`Tong la: ${tong}`);
alert(`Hieu la: ${hieu}`);
alert(`Tich la: ${tich}`);
alert(`Thuong la: ${thuong}`);
alert(`So du la: ${sodu}`);

// bai 3
var number3 = prompt("Nhap vao 1 so: ");
document.write(`Bạn vừa nhập vào số: ${number3}. `);

if (isNaN(number3) == true) {
	alert("Ban can nhap so.");
} else {
	if (number3 > 10) {
		document.write(`${number3} lớn hơn 10.`);
	} else {
		document.write(`${number3} nhỏ hơn 10.`);
	}
}

// bai 4
var number4 = prompt("Nhap vao 1 so: ");
if (number4 % 2 == 0) {
	alert(`${number4} là số chẵn.`);
} else {
	alert(`${number4} là số lẻ.`);
}

// bai 5
var diem = prompt("Nhập điểm d: ");
if (diem >= 8 && diem <= 10) {
	alert("Giỏi");
} else if (diem >= 6 && diem < 8) {
	alert("Khá");
} else if (diem >= 5 && diem < 6) {
	alert("Trung bình");
} else if (diem < 5) {
	alert("Học lại đi.");
} else {
	alert("Nhập sai.");
}

// bai 6
var kt1 = prompt("Nhập kí tự 1: ");
var kt2 = prompt("Nhập kí tự 2: ");

var result = kt1 + kt2;
alert(result);
