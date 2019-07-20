function addCol(){
	let rows = document.getElementsByTagName("tr");
	for (let i = 0; i < rows.length; i++){
		var cell = document.createElement("td");
		rows[i].appendChild(cell);
	}
}

function remCol(){
    let rowList = document.getElementsByTagName("tr");
    for (let i = 0; i < rowList.length; i++){
        rowList[i].lastChild.remove();
    }
}

function addRow() {
    console.log("addRow called");
	let table = document.getElementById("table1");
	let numcols = document.getElementsByTagName("tr")[0].getElementsByTagName("td").length;

	let newRow = document.createElement("tr");

	for (let i = 0; i < numcols; i++) {
		newRow.appendChild(document.createElement("td"));
	}

	table.appendChild(newRow);
}

function remRow(){
    let table = document.getElementById("table1");
    table.lastChild.remove();
}

window.onload = function(){
    for (let i = 0; i < 5; i++){
        addRow();
    }
    for (let i = 0; i < 5; i++){
        addCol();
    }
}
