const container = document.querySelector('.container');

function createGrid(sizeInput) {
    let allColumnDivs = document.querySelectorAll('.column');
    let allSquareDivs = document.querySelectorAll('square');

    allColumnDivs.forEach((column) => {
        const columnRemove = column;
        container.removeChild(columnRemove);
    });

    allSquareDivs.forEach((square) => {
        const squareRemove = square;
        container.removeChild(squareRemove);
    });

    for (let i = 0; i < sizeInput; i++) {
        let columnDiv = document.createElement('div');
        columnDiv.classList.add('column');

        for (let j = 0; j < sizeInput; j++) {
            let squareDiv = document.createElement('div');
            squareDiv.classList.add('square');
            squareDiv.addEventListener('mouseenter', (e) => {
                e.target.style.backgroundColor = 'black';
                e.target.style.opacity = 1;
            });
            columnDiv.appendChild(squareDiv);
        }

        container.appendChild(columnDiv);
    }
}

function gridSize() {
    let sizeInput = prompt("Enter a number between 1 & 100: ", '16');
    if (sizeInput === null) return;

    if (isNaN(sizeInput) || sizeInput < 1 || sizeInput > 100) {
        alert('Invalid size. Please try again.');
        gridSize();
    }
    return sizeInput;
}

const sizeButton = document.querySelector('.size-button');
sizeButton.addEventListener('click', () => createGrid(gridSize()));
