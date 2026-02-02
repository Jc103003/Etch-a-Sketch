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
        cell.dataset.opacity = 0
        
        cell.addEventListener("mouseenter", () => {
            let opacity = Number(cell.dataset.opacity)

            if ( opacity === 0){
                cell.style.backgroundColor = getRandomColor()
                opacity += 0.1
            }
            else {
                opacity += 0.1
                if (opacity > 1) opacity = 1;
            }
            cell.dataset.opacity = opacity
            cell.style.opacity = opacity
        })
        gridContainer.appendChild(cell)

    }
}

function getRandomColor() {
    const randomColor = Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return `#${randomColor}`;
}

createGrid(cellAmount)

gridButton.addEventListener("click", () => {
    cellAmount = Number(prompt("Enter amount of cells", 16))
    if (!cellAmount || cellAmount > 100) return;
    createGrid(cellAmount)
})