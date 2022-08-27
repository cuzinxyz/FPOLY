// todo: Bai 1
function start() {
	let soNguyen;
	let ketqua = 1;

	do {
		soNguyen = prompt("Bài 1: Nhập vào 1 số nguyên dương.");
		if (soNguyen < 0 || soNguyen > 10 || isNaN(soNguyen) == true) {
			alert("Giá trị không hợp lệ.");
		} else {
			for (let i = 1; i <= soNguyen; i++) {
				ketqua *= i;
			}
			alert("Giai thừa của N = " + ketqua);
		}
	} while (isNaN(soNguyen) == true || soNguyen < 0 || soNguyen > 10);
}

// todo: Bai 2
function startt() {
	let soNguyen2;
	let tong = 0;
	do {
		soNguyen2 = prompt("Bài 2: Nhập vào 1 số nguyên dương.");
		if (soNguyen2 < 0 || soNguyen2 > 10 || isNaN(soNguyen2) == true) {
			alert("Giá trị không hợp lệ.");
		} else {
			for (let j = 1; j <= soNguyen2; j++) {
				tong += j;
			}
			alert("Giá trị của S = " + tong);
		}
	} while (isNaN(soNguyen2) == true || soNguyen2 < 0 || soNguyen2 > 10);
}

// todo: Bai 3
function TaiKhoan(userName, password) {
	this.userName = userName;
	this.password = password;
}

TaiKhoan[0] = new TaiKhoan("demo1", "pass1");
TaiKhoan[1] = new TaiKhoan("demo2", "pass2");
TaiKhoan[2] = new TaiKhoan("demo3", "pass3");
TaiKhoan[3] = new TaiKhoan("demo4", "pass4");
TaiKhoan[4] = new TaiKhoan("demo5", "pass5");

for (let item in TaiKhoan) {
	console.log(TaiKhoan[item].userName);
	console.log(TaiKhoan[item].password);
}

// todo: Bai 4

function bai4() {
	function Hoa(mauSac, soCanh) {
		this.mauSac = mauSac;
		this.soCanh = soCanh;
	}
	Hoa.mauSac = prompt("Nhập màu sắc: ");
	Hoa.soCanh = prompt("Nhập số cành: ");

	alert(`${Hoa.mauSac} - ${Hoa.soCanh}`);
}

// todo: Bài 5
function DongVat(maDV, ten, canNang) {
	this.maDV = maDV;
	this.ten = ten;
	this.canNang = canNang;
	this.tiengKeu = function () {
		alert("Meo meo");
	};
}

DongVat[0] = new DongVat(1, "meo", 12);
DongVat[1] = new DongVat(2, "cho", 20);
DongVat[2] = new DongVat(3, "su tu", 90);
DongVat[3] = new DongVat(4, "chim", 1);
DongVat[4] = new DongVat(5, "bao", 80);

for (let value in DongVat) {
	alert(
		DongVat[value].maDV +
			" - " +
			DongVat[value].ten +
			" - " +
			DongVat[value].canNang
	);
}
