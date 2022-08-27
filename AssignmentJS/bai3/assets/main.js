const listData = [
	{
		hang: "iPhone 9",
		gia: 700,
		soluong: 0,
	},
	{
		hang: "Samsung",
		gia: 400,
		soluong: 0,
	},
	{
		hang: "Nokia",
		gia: 100,
		soluong: 0,
	},
	{
		hang: "Sony Xperia",
		gia: 450,
		soluong: 0,
	},
	{
		hang: "Motorola",
		gia: 180,
		soluong: 0,
	},
	{
		hang: "Oppo",
		gia: 600,
		soluong: 0,
	},
	{
		hang: "Bphone",
		gia: 90,
		soluong: 0,
	},
];

function toggle(source) {
	let checkboxes = document.querySelectorAll('input[type="checkbox"]');
	for (let i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i] != source) checkboxes[i].checked = source.checked;
	}
}

function showData(data) {
	let table = "";

	for (let item of data) {

		let row = ` 
            <tr class="row">
                <td class="row-check">
                    <input type="checkbox" onclick="">
                </td>
                <td class="row-tensp">${item.hang}</td>
                <td class="row-giasp">${item.gia}</td>
                <td class="row-soluong">
                    <input type="number" id="soLg" value="${item.soluong}" onchange="thanhtien(this)">
                </td>
                <td class="row-thanhtien">
                    
                </td>
            </tr>
        `;
		table = table + row;
	}
	document.getElementById("table-body").innerHTML = table

	if (listData.length === 0) {
		alert("Không có sản phẩm nào!");
	}
}

showData(listData);

function thanhtien(temp) {

	let row = temp.parentElement.parentElement; // tr tag
	let columns = row.getElementsByTagName("td"); // get td in tr tag
	columns[4].innerText = Number(columns[2].innerText) * Number(temp.value);

}

function sumMoney() {
	let table = document.getElementById("table");
	var sum = 0;
	for(var i = 1; i < table.rows.length; i++) {
		sum = sum + parseInt(table.rows[i].cells(4).innerHTML)
	}

	document.querySelector(".tongTien").innerHTML = sum;

	console.log(sum)
}
sumMoney();

const filterSelect = document.querySelector("#filter-select");
function filterCategory() {
	const over100 = listData.filter(function (item) {
		return item.gia > 100;
	});

	const under100 = listData.filter(function (item) {
		return item.gia <= 100;
	});

	if (filterSelect.value == "over100") {
		showData(over100);
	}
	if (filterSelect.value == "under100") {
		showData(under100);
	}
	if (filterSelect.value == "all") {
		showData(listData);
	}
}

filterSelect.addEventListener("change", filterCategory);
