const tileDisplay = document.querySelector('.gameboard');
let currentTile = 1;
let winningWord = 'start';


// Create a global variable (object or array)that saves each letter the player enters.
const playerLetters = []


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
        console.log('clicked ' + key)
        playerLetters.push(key)
    };
    
}


function addLetterToTiles(letter) {
    if (currentTile <= 30) {
        const tile = document.getElementById(currentTile)
        tile.textContent = letter
        currentTile = currentTile + 1
    } else {
        window.alert('your out of guesses!')
    }
}


const enterbtn = document.querySelector('#enter')
enterbtn.addEventListener('click', () => {
    console.log('clicked Enter')
    console.log(playerLetters)
    
})











//.join('') method
// function checkForWinner() {
//     if (currentTile === 5 )

// }



