const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    let parentDiv = document.createElement('div');
    parentDiv.classList.add('column')

    for (let j = 0; j < 16; j++) {
        let childDiv = document.createElement('div')
        childDiv.classList.add('square')
        parentDiv.appendChild(childDiv);
    }

    container.appendChild(parentDiv);
}

