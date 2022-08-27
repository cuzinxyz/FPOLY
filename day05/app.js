// BAI TAP 1
function eventt() {
	let b1;
	let b2;
	do {
		b1 = prompt("Bài 1: Nhập vào 1 số nguyên dương.");
		b2 = prompt("Bài 1: Nhập vào 1 số nguyên dương.");
	} while (isNaN(b1) == true || isNaN(b2) == true || b1 < 0 || b2 < 0);

	let chuvi = (b1 + b2) * 2;
	let dientich = b1 * b2;

	alert("Chu vi: " + chuvi);
	alert("Dien tich: " + dientich);
}

// BAI TAP 2
function bai2() {
	let diemGK = Number(prompt("Bài 2: Nhập điểm giữa kỳ: "));
	let diemCK = Number(prompt("Nhập điểm cuối kì: "));

	let avg = (diemCK + diemGK) / 2;

	if (avg >= 0 && avg < 5) {
		alert("Hạng F");
	} else if (avg >= 5 && avg < 7) {
		alert("Hạng C");
	} else if (avg >= 7 && avg < 9) {
		alert("Hạng B");
	} else if (avg >= 9 && avg <= 10) {
		alert("Hạng A");
	} else {
		alert("Nhập lại.");
	}
}

// BAI TAP 3
function start() {
	let kitu = prompt("Bài 3: Nhập n: ");

	let tong = 0;
	if (isNaN(kitu) == true) {
		alert("Yêu cầu nhập lại.");
	} else {
		for (let i = 0; i <= kitu; i++) {
			if (i % 2 == 0) {
				tong += i;
			}
		}
		alert("Tổng các số chẵn từ 1 đến N là: " + tong);
	}
}

// BAI TAP 4
function showAnhDoAn(doan) {
	if (doan == "an") {
		document.write(
			"<img src='https://suno.vn/blog/wp-content/uploads/2017/09/4-bi-quyet-ban-do-an-vat-qua-mang-kiem-tien-trieu-moi-ngay.jpg' />"
		);
	} else if (doan == "uong") {
		document.write(
			"<img src='https://digiticket.vn/blog/wp-content/uploads/2020/09/do-uong.png' /> "
		);
	}
}

// BAI TAP 5
function eventtt() {
	let n = prompt("Bài 5: Nhập n: ");

	let tich = 1;
	if (isNaN(n) == true) {
		alert("Yêu cầu nhập lại.");
	} else {
		for (let i = 1; i <= n; i++) {
			if (i % 2 == 0) {
				tich *= i;
			}
		}
		alert("Tích các số chẵn từ 1 đến N là: " + tich);
	}
}
