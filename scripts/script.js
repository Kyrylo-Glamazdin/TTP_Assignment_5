let currentColor = "red";

function addCol(){
	let rows = document.getElementsByTagName("tr");
	for (let i = 0; i < rows.length; i++){
		let cell = document.createElement("td");
        cell.addEventListener("click", function(){
                              console.log("clicked");
                              this.style.backgroundColor = currentColor;});
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

    let numcols = 0
    if (document.getElementsByTagName("tr")[0]) {
        numcols = document.getElementsByTagName("tr")[0].getElementsByTagName("td").length;
    } else {
        numcols = 6;
    }

	let newRow = document.createElement("tr");
	for (let i = 0; i < numcols; i++) {
		let cell = document.createElement("td");
        cell.addEventListener("click", function(){
                              console.log("clicked");
                              this.style.backgroundColor = currentColor;});
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
            this.style.backgroundColor = currentColor;
            }));
    document.getElementById("redButton").style.backgroundColor = "#E5E1FF";
}

function clearColors(){
    let cells = document.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++){
        cells[i].style.backgroundColor = "#E5E1FF";
    }
}

function changeColorToBlue(){
    currentColor = "blue";
    let colorButtons = document.getElementsByClassName("dropdown-item");
    for (let i = 0; i < colorButtons.length; i++){
        colorButtons[i].style.backgroundColor = "white";
    }
    document.getElementById("blueButton").style.backgroundColor = "#E5E1FF";
}

function changeColorToGreen(){
    currentColor = "green";
    let colorButtons = document.getElementsByClassName("dropdown-item");
    for (let i = 0; i < colorButtons.length; i++){
        colorButtons[i].style.backgroundColor = "white";
    }
    document.getElementById("greenButton").style.backgroundColor = "#E5E1FF";
}

function changeColorToRed(){
    currentColor = "red";
    let colorButtons = document.getElementsByClassName("dropdown-item");
    for (let i = 0; i < colorButtons.length; i++){
        colorButtons[i].style.backgroundColor = "white";
    }
    document.getElementById("redButton").style.backgroundColor = "#E5E1FF";
}

function changeColorToDefault(){
    currentColor = "#E5E1FF";
    let colorButtons = document.getElementsByClassName("dropdown-item");
    for (let i = 0; i < colorButtons.length; i++){
        colorButtons[i].style.backgroundColor = "white";
    }
    document.getElementById("defaultButton").style.backgroundColor = "#E5E1FF";
}

function fillEmptyCells(){
    let cells = document.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++){
        if (cells[i].style.backgroundColor != "red" && cells[i].style.backgroundColor != "green" &&
                cells[i].style.backgroundColor != "blue"){
            cells[i].style.backgroundColor = currentColor;
        }
    }
}
