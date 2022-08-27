// BAI TAP 1
function bai01() {
	let n;
	do {
		n = prompt("Bài 1: Nhập n để tính tổng: ");
	} while (isNaN(n) == true);

	let tong = 0;

	for (let i = 0; i <= n; i++) {
		tong += i;
	}
	alert("Tổng số từ 0 đến n là: " + tong);
}

// BAI TAP 2
function bai2() {
	let doanhso = Number(prompt("Bài 2: Nhập doanh số: "));
	let hoahong = 0;
	if (doanhso >= 0 && doanhso <= 100) {
		hoahong = doanhso * 0.05;
	} else if (doanhso > 100 && doanhso <= 300) {
		hoahong = doanhso * 0.1;
	} else if (doanhso > 300) {
		hoahong = doanhso * 0.2;
	} else {
		alert("Nhập sai.");
	}
	alert("Hoa hồng nhận được là: " + hoahong);
}
// BAI TAP 3
function start() {
	let n = prompt("Bài 3: Nhập số N: ");
	if (n >= 1 && n <= 10) {
		if (isNaN(n) == true) {
			alert("Giá trị không hợp lệ");
		} else {
			let ketqua = 1;
			for (let i = n; i > 0; i--) {
				ketqua = ketqua * i;
			}
			alert("N! = " + ketqua);
		}
	} else {
		alert("Giá trị N phải nằm trong khoảng từ 1 -> 10.");
	}
}

// BAI TAP 4
function showDoAn(food) {
	if (food == "an") {
		document.write(
			"<img src='https://znews-photo.zingcdn.me/w210/Uploaded/rotntv/2022_05_17/Chao_David_05162022_1_.jpg' /> "
		);
	} else if (food == "uong") {
		document.write(
			"<img src='https://znews-photo.zingcdn.me/w960/Uploaded/nugzrd/2022_05_17/10.jpg' /> "
		);
	}
}

// BAI TAP 5
function events() {
	let so = prompt("Bài 5: Nhập số nguyên dương: ");
	if (isNaN(so) == true) {
		alert("Giá trị không hợp lệ");
	} else {
		if (so < 0) {
			alert("Giá trị phải là số dương");
		} else {
			let S = 1;
			for (let i = 1; i <= so; i++) {
				if (i % 2 == 0) {
					S = S * i;
				}
			}
			alert("S = " + S);
		}
	}
}
