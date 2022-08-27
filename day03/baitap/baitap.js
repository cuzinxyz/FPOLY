// BAI TAP 1

let thang = Number(prompt("Bai 1: Nhập tháng: "));
switch (thang) {
	case 1:
	case 2:
	case 3:
		alert("Quý 1");
		break;
	case 4:
	case 5:
	case 6:
		alert("Quý 2");
		break;
	case 7:
	case 8:
	case 9:
		alert("Quý 3");
		break;
	case 10:
	case 11:
	case 12:
		alert("Quý 4");
		break;
	default:
		alert("Nhập sai!");
		break;
}

// BAI TAP 2

let array = ["Meo", "Cho", "Trau", "Bo", "Ga"];

console.log(`Có ${array.length} phần tử trong mảng.`);
for (let i = 0; i < array.length; i++) {
	if (i % 2 == 1) {
		console.log(array[i]);
	}
}

// BAI TAP 3
let hanhkiem = prompt("Bai 3: Nhập vào hạnh kiểm: ");
switch (hanhkiem) {
	case "A":
		alert("Tuyệt vời!");
		break;
	case "B":
	case "C":
		alert("Khá!");
		break;
	case "D":
	case "E":
	case "F":
		alert("Trung bình!");
		break;
	default:
		alert("Nhập sai!");
		break;
}

// BAI TAP 4
let n = Number(prompt("Bài 4: Nhập n = "));
var result = 1;
for (let i = 1; i <= n; i++) {
	result = result * i;
}
alert(`n! = ${result}`);

// BAI TAP 5
let number = Number(prompt("Bài 5: Nhập n = "));
var tong = 0;

for (var i = 1; i <= number; i++) {
	tong = tong + i;
}

alert(`${tong} là tổng từ 0 đến ${number}`);

// BAI TAP 6
let toan = Number(prompt("Bài 6: Nhập điểm toán: "));
let ly = Number(prompt("Nhập điểm lý: "));
let hoa = Number(prompt("Nhập điểm hóa: "));

let avg = (toan + ly + hoa) / 3;
alert(`${avg} là điểm trung bình của 3 môn.`);

// BAI TAP 7
let arrr = [10, 12, "Tuyệt vời"];
for (let i = 0; i < arrr.length; i++) {
	alert(`Bài 7: ${arrr[i]}`);
}
