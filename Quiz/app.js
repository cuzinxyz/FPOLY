// todo BAI 1
function ThucVat(maTV, canNang, chieuCao) {
	this.maTV = maTV;
	this.canNang = canNang;
	this.chieuCao = chieuCao;
	this.inThongTin = function () {
		console.log(`${this.maTV} -- ${this.canNang} -- ${this.chieuCao}`);
	};
}
let tv = new ThucVat();

tv.maTV = prompt(`Bài 1: Nhập mã TV: `);
tv.canNang = prompt(`Nhập cân nặng: `);
tv.chieuCao = prompt(`Nhập chiều cao: `);
tv.inThongTin();

// todo: BAI 2
const User = {
	ten: "Nhat",
	tuoi: 18,
};
console.log(`Bài 2: ${User.ten} - ${User.tuoi}`);

User.ho = "Nguyen";

User.tuoi = prompt("Bài 2: Nhập tuổi:");

console.log(`Bài 2: ${User.ho} ${User.ten} - ${User.tuoi}`);

// todo: BAI 3
const userr = {};
userr.name = "David";
console.log("Bài 3: Tên trước khi update: " + userr.name);
userr.surname = "Xuan";
userr.name = "Cafedev";
console.log(`Sau khi update: ${userr.name} - ${userr.surname}`);

// todo: BAI 4
let yearNOW = new Date().getFullYear();
let year = Number(prompt("Bài 4: Nhập vào năm sinh của bạn: "));

let tuoi = yearNOW - year;
console.log(`Bài 4: Tuổi của bạn là: ${tuoi}`);

// todo: BAI 5
function DongVat(tenn, tuoii, canNangg, gioiTinh) {
	this.tenn = tenn;
	this.tuoii = tuoii;
	this.canNangg = canNangg;
	this.gioiTinh = gioiTinh;
	this.tiengKeu = function (keu) {
		keu = prompt("Nhập tiếng kêu: ");
		return keu;
	};
}

let dv = new DongVat();
dv.tenn = prompt("Bài 5: Nhập tên động vật: ");
dv.tuoii = prompt("Nhập vào tuổi: ");
dv.canNangg = prompt("Nhập cân nặng: ");
dv.gioiTinh = prompt("Nhập giới tính: ");
let keuu = dv.tiengKeu();

console.log(
	`${dv.tenn} - ${dv.tuoii} - ${dv.canNangg} - ${dv.gioiTinh} - ${keuu}`
);

// todo: BAI 6
function start() {
	let soNguyen;
	let tich = 1;
	do {
		soNguyen = prompt("Bài 6: Nhập vào 1 số nguyên từ 1 - N: ");
		if (
			isNaN(soNguyen) == true ||
			soNguyen < 0 ||
			soNguyen > 10 ||
			Number.isInteger(soNguyen)
		) {
			alert("Giá trị không hợp lệ!");
		} else {
			for (let i = 1; i <= soNguyen; i++) {
				tich *= i;
			}
			alert("Giá trị của N! = " + tich);
		}
	} while (
		isNaN(soNguyen) == true ||
		soNguyen < 0 ||
		soNguyen > 10 ||
		Number.isInteger(soNguyen)
	);
}

// todo: BAI 7
function startt() {
	let soNguyen;
	let tong = 0;
	do {
		soNguyen = prompt("Bài 7: Nhập vào 1 số nguyên từ 1 - N: ");
		if (
			isNaN(soNguyen) == true ||
			soNguyen < 0 ||
			soNguyen > 10 ||
			Number.isInteger(soNguyen)
		) {
			alert("Giá trị không hợp lệ!");
		} else {
			for (let i = 1; i <= soNguyen; i++) {
				tong += i;
			}
			alert("Giá trị của S = " + tong);
		}
	} while (
		isNaN(soNguyen) == true ||
		soNguyen < 0 ||
		soNguyen > 10 ||
		Number.isInteger(soNguyen)
	);
}
