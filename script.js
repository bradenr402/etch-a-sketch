const container = document.querySelector('.container');

for (let i = 0; i < 32; i++) {
    let columnDiv = document.createElement('div');
    columnDiv.classList.add('column')

    for (let j = 0; j < 32; j++) {
        let squareDiv = document.createElement('div')
        squareDiv.classList.add('square')
        columnDiv.appendChild(squareDiv);
    }

    container.appendChild(columnDiv);
}