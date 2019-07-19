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
