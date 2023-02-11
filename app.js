let winningWord = 'LOWER';
let rowCount = 0;
let currentTile = 1;
// Create a global variable that saves each letter the player enters.
let playerLetters = []


const tileDisplay = document.querySelector('.gameboard');
function createTiles() {
    for(i = 0; i < 30; i++) {
        const tiles = document.createElement('div')
        tiles.classList.add('tile')
        tiles.classList.add('animate__animated')
        tiles.setAttribute('id', i + 1)
        tileDisplay.appendChild(tiles)
    }
}
createTiles()



const keys = document.querySelectorAll('.row button');
//using eventlistener adding functionality to my keyboards
for(i = 0; i < keys.length; i++) {
    keys[i].onclick = ({target}) => {
        const letter = target.getAttribute('data-set');
        addLetterToTiles(letter)
        console.log('clicked ' + letter)
        playerLetters.push(letter)
    };
    
}


function addLetterToTiles(letter) {
    if (currentTile <= 30) {
        const tile = document.getElementById(currentTile)
        tile.textContent = letter 
        currentTile = currentTile + 1
    } 
    else {
        window.alert(`Bad Luck! The Word Is ${winningWord}`)
    }
    
}

const removeButton = document.querySelector('#backspace')
removeButton.addEventListener('click', () => {
    console.log('clicked backspace')
    const tile = document.getElementById(currentTile)
    tile.textContent = ''
    currentTile = currentTile - 1
    
})

const enterbtn = document.querySelector('#enter')
enterbtn.addEventListener('click', () => {
    console.log(playerLetters)
    newGuess()

})

function newGuess() {
    let guess = playerLetters.join('')
    console.log(guess)
    if (guess === winningWord){
        window.alert('You Win!')
        playerLetters.forEach((letter, i) => {
            const firstLetterIndex = rowCount * 5 + 1;
            setTimeout(() => {
                const letterIndex = firstLetterIndex + i;
                const eachLetter = document.getElementById(letterIndex)
                eachLetter.style.backgroundColor = winningConditions(letter, i)
                eachLetter.classList.add('animate__flipInX')
            }, 500);

        });
        rowCount = rowCount + 1
        playerLetters = []
        let btnGameOver = document.createElement('button')
        btnGameOver.innerHTML = 'Play Again!'
        let newPage = document.querySelector('.btnNewGame')
        newPage.appendChild(btnGameOver)
        btnGameOver.addEventListener('click', function() {
            location.reload();
        })
        
    } else {
        playerLetters.forEach((letter, i) => {
            const firstLetterIndex = rowCount * 5 + 1;
            setTimeout(() => {
                const letterIndex = firstLetterIndex + i;
                const eachLetter = document.getElementById(letterIndex)
                eachLetter.style.backgroundColor = winningConditions(letter, i)
                eachLetter.classList.add('animate__flipInX')
            }, 500);

        });
        rowCount = rowCount + 1
        playerLetters = []
        }
        
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

