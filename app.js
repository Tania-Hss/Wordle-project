const tileDisplay = document.querySelector('.gameboard');
let currentTile = 1;
let winningWord = 'START';
let row = 0;

// Create a global variable that saves each letter the player enters.
let playerLetters = []


function createTiles() {
    for(i = 0; i < 30; i++) {
        const tiles = document.createElement('div')
        tiles.classList.add('tile')
        tiles.setAttribute('id', i + 1)
        tileDisplay.appendChild(tiles)
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
        window.alert(`Bad Luck! The Word Is ${winningWord}`)
    }
    
}

const backspacebtn = document.querySelector('#backspace')
backspacebtn.addEventListener('click', () => {
    console.log('clicked backspace')
    // .remove() or .pop()
    
})

const enterbtn = document.querySelector('#enter')
enterbtn.addEventListener('click', () => {
    console.log('clicked Enter')
    console.log(playerLetters)
    newGuess()
    
})

function newGuess() {
    let guess = playerLetters.join('')
    console.log(guess)
    if (guess === winningWord){
        window.alert('You Win!')
    }
    //if row = 0 first letter in row will be 1 
    //if row = 1 first letter in row will be 6 which is first letter of row 1  / next guess
    playerLetters.forEach((letter, i) => {
    const firstLetterInRow = row * 5 + 1;
        setTimeout(() => {
            const letterIndex = firstLetterInRow + i;
            const eachLetter = document.getElementById(letterIndex)
            eachLetter.style.color = winningConditions(letter, i)
        }, 500);
        
    });

    playerLetters = []
}



function winningConditions(letter, i) {
    if (winningWord.includes(letter) && winningWord.charAt(i) !== letter) {
        return 'rgb(204, 204, 0)'
        
    } else if (winningWord.charAt(i) === letter) {
        return'rgb(102, 204, 0)'
        
    } else if (!winningWord.includes(letter)) {
        return 'rgb(58, 56, 59)'
        
    } 
}

/*
to compare the winning word to player word by the letter and the position of letter
making tiles change color to yellow green grey depending if their word matches the winning word
if winningword === letterposition
if winningword === letter



right letter right position = green
right letter wrong position = yellow
wrong letter wrong position = grey

bugs

if player guesses word correctly stop the game 


if player guesses word dont run the 'you lose' message anymore
*/
