const container = document.querySelector('#container');
let gridNum;

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    gridNum = prompt('Enter the number of square you want per side. Range:1-100');
    if (gridNum >= 1 && gridNum <= 100){
        gridReset();
        gridGenerator(gridNum);
    }
    else {
        alert('Invalid number');
    }
});

function gridGenerator(gridNum) {
    for (let i = 0; i < gridNum; i++){
        for (let j = 0; j < gridNum; j++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('grid');
            newDiv.style.width = `${100 / gridNum}%`;
            container.appendChild(newDiv);
            
            newDiv.addEventListener('mouseover', () => {
                let newColor = '#' + Math.floor(Math.random() * 900000);
                newDiv.style.backgroundColor = `${newColor}`;
            });
        }
    }
}

function gridReset() {
    container.innerHTML = '';
}