# Wordle-project
Project submission for GA Flex Course

## gameplay

- The player gets 6 tries at a 5 letter word
- guesses must be a real word and in word list

_hints_

- grey tile: letter is not in word 
- green tile: letter is in the word and in the correct position
- yellow tile: letter is in the word but in the wrong position
(using data attribute)
## game structure
heading
board 5*6
keyboard

need an array of words

## animations


[flipInX animations](https://animate.style/)
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>     
## functionality

- function for creating the game board 
- creating the keyboard
backspacing + entering 
- typing letter should give an output in the tiles (move to the next line ++)
- backspace will delete letters from the tile
- enter key will submit the letter and check for answer


## message

alerts
- when word not in word list
- when they correctly guess the word
- when they have 0 number of guesses left (lose)
- 


[Original Wordle](https://www.nytimes.com/games/wordle/index.html)