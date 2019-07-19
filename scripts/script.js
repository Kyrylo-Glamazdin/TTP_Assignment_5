function addCol(){
	var rows = document.getElementsByClassName("rclass");
	for (let i = 0; i <= rows.length; i++){
		var cell = document.createElement("td");
		rows[i].appendChild(cell);
	}
}

function remCol(){
	var rows = document.getElementsByClassName("rclass");
	for (let i = 0; i <= rows.length; i++){
		rows[i].removeChild(rows[i].childNodes[childNodes.length-1]);
	}
}

function addRow() {
	console.log("addRow called")
	let table = document.getElementById("table1");
	let numcols = document.getElementsByClassName("rclass")[0].getElementsByTagName("td").length;

	let newRow = document.createElement("tr");
	newRow.className += "rclass";

	for (let i = 0; i < numcols; i++) {
		newRow.appendChild(document.createElement("td"));
	}

	table.appendChild(newRow);
}