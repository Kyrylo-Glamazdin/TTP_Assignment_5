function addCol(){
	let rows = document.getElementsByTagName("tr");
	for (let i = 0; i < rows.length; i++){
		let cell = document.createElement("td");
        cell.addEventListener("click", function(){
                              console.log("clicked");
                              this.style.backgroundColor = "red";});
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
		let cell = document.createElement("td");
        cell.addEventListener("click", function(){
                              console.log("clicked");
                              this.style.backgroundColor = "red";});
        newRow.appendChild(cell);
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
    document.querySelectorAll("#table1 td").forEach(e => e.addEventListener("click", function(){
            console.log("clicked");
            this.style.backgroundColor = "red";
            }));
}
