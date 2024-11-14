const container = document.querySelector(".container");
let grid = 16; 

gridProtocal();
document.querySelector("#reset").addEventListener("click", () => {
    reset();
    });
document.querySelector("#gridSize").addEventListener("change", () => {
    grid = document.querySelector("#gridSize").value;
    container.style.gridTemplateColumns = `repeat(${grid}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${grid}, 1fr)`;
    reset();
});        





function gridProtocal() {
    for (let i = 0; i < grid * grid; i++) { 
        const square = document.createElement("div");
        square.classList.add("square"); 
        container.appendChild(square);
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = document.querySelector("#colorPicker").value;
        });
    }
}    

function reset() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);} 
        gridProtocal();
}