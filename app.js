
const tileDisplay = document.querySelector('.gameboard');

function createTileDisplay() {
    for(i = 0; i < 30; i++) {
    const tiles = document.createElement('div')
    tiles.classList.add('tile')
    tiles.setAttribute('id', i + 1)
    tileDisplay.appendChild(tiles);
}
}
createTileDisplay()