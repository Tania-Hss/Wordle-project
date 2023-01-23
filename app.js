const tileDisplay = document.querySelector('.gameboard');
let currentTile = 1

let winningWord = 'start';

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
        console.log(key)
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


const enterbtn = document.querySelector('#enter')
enterbtn.addEventListener('click', () => {
    console.log('enter was clicked')
})
    

for (let i = 0; i < winningWord.length; i++) {
    
    
}


//.charAt method returns the character at a specified index (position) in a string

// function checkForWinner() {
//     if (currentTile === 5 )

// }



