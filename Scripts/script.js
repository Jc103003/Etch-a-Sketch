let gridContainer = document.getElementById("Container")
let gridButton = document.getElementById("changeGrid")
let cellAmount = 16


function createGrid(cellAmount) {
    gridContainer.replaceChildren();
    const size = 960 / cellAmount;
    for (let i = 0; i < cellAmount * cellAmount; i++) {
        const cell = document.createElement("div")
        cell.style.width = `${size}px`;
        cell.style.height = `${size}px`;
        cell.classList.add("cell");
        cell.style.outline = '1px solid black'
        
        cell.addEventListener("mouseenter", () => {
            cell.style.backgroundColor = 'green'
        })
        gridContainer.appendChild(cell)

    }
}


createGrid(cellAmount)

gridButton.addEventListener("click", () => {
    cellAmount = Number(prompt("Enter amount of cells", 16))
    if (!cellAmount || cellAmount > 100) return;
    createGrid(cellAmount)
})