const tileDisplay = document.querySelector('.gameboard');
let currentTile = 1

function createTiles() {
    for(i = 0; i < 30; i++) {
    const tiles = document.createElement('div')
    tiles.classList.add('tile')
    tiles.setAttribute('id', i + 1)
    tileDisplay.appendChild(tiles);
    }
}
createTiles()

const keys = document.querySelectorAll('.row button');
for(i = 0; i < keys.length; i++) {
    keys[i].onclick = ({target}) => {
        const key = target.getAttribute('data-set');
        addLetterToTiles(key)
    };
}


function addLetterToTiles(letter) {
    if (currentTile <= 30) {
        const tile = document.getElementById(currentTile)
        tile.textContent = letter
        currentTile = currentTile + 1
    } else {
        console.log('nahhhh enough ')
    }
}

function deleteButton () {
    document.getElementById("enter").click(console.log('yayyyyy'));
}





