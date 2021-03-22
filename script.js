const container = document.getElementById("container");
const resetButton = document.getElementById("reset-button");

window.addEventListener("load", defaultGrid);
window.addEventListener("load",()=>{
    console.log("page is fully loaded");
});
resetButton.addEventListener("click", changeSize);

//Create a default grid of size 16x16

function defaultGrid(){
    makeRows(16);
    makeCells(16);
}

// Take (rows, columns) and make a grid;


function makeRows(size){
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function makeCells(size){
    for(i=0; i < size * size; i++){
        let cell = document.createElement("div");
        cell.className = "cell";
        cell.addEventListener("mouseover", changeColor);
        container.appendChild(cell);
        
    }
}

function changeColor(e){
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgba(${randomR},${randomG},${randomB})`;
}

function changeSize(){
    let newSize = parseInt(prompt("Enter a new size between 1 and 64"));

    if ((Number.isNaN(newSize)) || (newSize < 1)|| (newSize > 64)){
        alert("Enter a number between 1 and 64");
        changeSize();
    }else{
        clearGrid();
        makeRows(newSize);
        makeCells(newSize);
    }
}

function clearGrid(){
    const gridArray = Array.from(container.childNodes);
    gridArray.forEach((element) => {
        container.removeChild(element);
    });
}





