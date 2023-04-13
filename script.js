const tiles = document.querySelector('.tiles');
const gridSizer = document.querySelector(".grid-size-select");
const tile = document.querySelector ("tile");
let gridSize; 

function createTile () {
    const tile = document.createElement("div"); 

    tile.classList.add("tile"); 

    return tile;
}; 

function createTiles (quantity) {
    Array.from(Array(quantity)).map((tile) => {
        tiles.appendChild(createTile());
    })
};

function createGrid (gridSize) {
    createTiles(gridSize*gridSize);
    tiles.style.setProperty("--gridSize", gridSize)
}


function getGridSize () {
    tiles.innerHTML = '';
    gridSize = prompt('Enter a number between 1 and 100');
    createGrid(gridSize);
}

gridSizer.addEventListener('click', getGridSize);

; 

// pseudocode

// create a variable for the grid size
// create custom properties to define number of columns and rows in CSS 
// define those custom properties as equal to gridSize variable
// create function to create and append a number of tiles equal to gridSize squared to the parent container
// add hover effects (only while mouse is held down) that change background color on mouse entry
// create button that generates a prompt to ask the user to define gridSize
// set gridSize to value identified by user