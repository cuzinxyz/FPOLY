// // bai1
// var ten = prompt("Nhap ten: ");
// var tuoi = prompt("Nhap tuoi: ");
// var diachi = prompt("Nhap dia chi: ");

// alert(ten);
// alert(tuoi);
// alert(diachi);

// // bai 2
// var number = 99;
// if (number % 10 == 0) {
// 	console.log(number + " chia het cho 10.");
// } else {
// 	console.log(number + " khong chia het cho 10.");
// }

// var la kieu global (toan cuc)
// let la kieu cuc bo

// co 2 cach ep kieu ve so: Number(tenbien), parseInt(tenbien), parseFloat(tenbien)

// isNaN: check gia tri truyen vao co phai la so hay la chuoi
// isNaN = true => la chuoi khong phai so; false => la so.

// var check = prompt("Nhap bat ki: ");

// if (isNaN(check) == true) {
// 	alert(`${check} la chuoi.`);
// } else {
// 	alert(`${check} la so.`);
// }

var number = prompt("Nhap: ");
console.log("Luc dau: " + typeof number);
console.log("Sau do: " + typeof Number(number));
