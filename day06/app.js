// Ojbect
// var hoaHong1 = {}; // object rỗng

// hoaHong1.mauSac = "Xanh"; // thêm thuộc tính

// var hoaHong2 = {
// 	// khởi tạo object có thuộc
// 	mau,
// 	soCanh,
// 	// cách viết method(hàm) trong Object
// 	// tenHam: function(thamso) {
// 	// code
// 	//}
// 	hienThiThongTin: function () {
// 		// code
// 	},
// };
// hoaHong2.mui = "Thom";

// // Cach 2
// var hoaHong3 = new Object();
// hoaHong3.huongvi = "Ngon";

// vi du
let hoaHong = {
	mauSac: "xanh",
	soCanh: 10,
	mui: "thom",
};
console.log(hoaHong.mauSac);

// thay doi gia tri
hoaHong.mauSac = "Do";
console.log(hoaHong.mauSac);

/*
 *: Class
 */
// Cach 1

class Hoa1 {
	// ? thuoc tinh
	// ? constructor
}

// Cach 2
function DongVat(ten, tuoi, canNang) {
	this.ten = ten;
	this.tuoi = tuoi;
	this.canNang = canNang;
	this.tiengKeu = function () {
		// ? code
		console.log("bla bla");
	};
}

// * Khoi tao 1 Object tu 1 class
var dv1 = new DongVat("dv1", 10, 2);
console.log(dv1);
dv1.tiengKeu(); // * goi ham trong class

function Dog(ten, tuoi) {
	this.ten = ten;
	this.tuoi = tuoi;
}

Dog[0] = new Dog("ten1", 10);
Dog[1] = new Dog("ten2", 1);
Dog[2] = new Dog("ten3", 4);
Dog[3] = new Dog("ten4", 7);
Dog[4] = new Dog("ten5", 9);

// * in ra cac phan tu
console.log("for -- in");
for (var i in Dog) {
	console.log(Dog[i].ten);
}
