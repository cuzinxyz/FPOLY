var numberFirst = prompt("Enter a: ");
var numberSecond = prompt("Enter b: ");

var num1 = parseInt(numberFirst);
var num2 = parseInt(numberSecond);
var total = num1 + num2;
var subtract = num1 - num2;
var division = num1 / num2;
var multiplication = num1 * num2;

alert("Tong la: " + total);
alert("Hieu la: " + subtract);
alert("Thuong la: " + division);
alert("Nhan la: " + multiplication);

var nan = 90;
if (nan % 5 == 0) {
  console.log(nan + " chia het cho 5");
}

var nan2 = 93;
if (nan2 % 3 == 0) {
  console.log(nan2 + " chia het cho 3");
}

var nan3 = 10;
if (nan3 % 2 == 0) {
  console.log("So chan.");
} else {
  console.log("So le.");
}
