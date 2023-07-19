const grid = document.querySelector('.grid');
let gridSizeDisplay = document.querySelector('.grid-size');
const resetBtn = document.querySelector('.reset-button');
const sizeBtn = document.querySelector('.size-button');
const colorBtn = document.querySelector('.color-button');
const blackBtn = document.querySelector('.black-button');
let colorMode = 'black';
let squareSize = 16;

createGrid(squareSize);

function createDiv(size) {
    const div = document.createElement('div');
    div.classList.add('square');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;

    return div;
}

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        grid.appendChild(row);
        for (let j = 0; j < gridSize; j++) {
            row.appendChild(createDiv(grid.clientWidth / gridSize / 3));
        }
    }
}

function reset() {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
    createGrid(squareSize);
}

function chooseGridSize() {
    let sizeInput = prompt("Enter a number between 1 & 100:", '16');
    if (sizeInput === null) return squareSize;

    if (isNaN(sizeInput) || sizeInput < 1 || sizeInput > 100) {
        alert('Invalid size. Please try again.');
        return squareSize;
    }
    return sizeInput;
}

grid.addEventListener('mouseover', (e) => {
    if (e.target.matches('.square')) {
        if (colorMode === 'black') {
            e.target.style.backgroundColor = '#121212';
        } else if (colorMode === 'color') {
            let randomR = Math.random() * 255,
            randomG = Math.random() * 255,
            randomB = Math.random() * 255;
            
            e.target.style.backgroundColor = `rgb(${randomR}, ${randomB}, ${randomG})`
        }
    }
});

sizeBtn.addEventListener('click', () => {
    squareSize = chooseGridSize();
    gridSizeDisplay.textContent = `${squareSize} \u00d7 ${squareSize}`;
    reset();
});

resetBtn.addEventListener('click', reset);

colorBtn.addEventListener('click', () => {
    colorMode = 'color';
});

blackBtn.addEventListener('click', () => {
    colorMode = 'black';
});