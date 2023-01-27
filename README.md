# Wordle-project
Project submission for GA Flex Course

## gameplay

- The player gets 6 tries at a 5 letter word
- guesses must be a real word and in word list

_hints_

- grey tile: letter is not in word 
- green tile: letter is in the word and in the correct position
- yellow tile: letter is in the word but in the wrong position

## game structure
heading
board 5*6
keyboard

need an array of words

## animations


[Animation from](https://animate.style/)

## functionality

- function for creating the board that has 5 colums and 6 rows
- creating the keyboard in html and using a for loop that goes through each key and listens for button being clicked.
- function for letter displays in the tiles (move to the next line ++) when player presses keyboard buttons
- selecting the enter buton and listening for button being clicked to perform a function
- creating an empty array that saves each letter the player clicks on 
- function that .joins player letters as a single string (word)
- function that sets winning conditions using if(if else) statement and depending on conditions returns a color.
- settimeout method inside function that takes playerletters and uses for each loop that takes Eachletter and sets the background color to winning condition function after waiting for seconds.
- backspacing (nice to have/not essential)
- animation 


## message

alerts

- when they correctly guess the word
- when they have 0 number of guesses left (lose)
- 


[Original Wordle](https://www.nytimes.com/games/wordle/index.html)
[settimeout method](https://www.w3schools.com/jsref/met_win_settimeout.asp)
[array methods](https://www.w3schools.com/js/js_array_methods.asp#:~:text=JavaScript%20Array%20Methods%201%20Converting%20Arrays%20to%20Strings,%28%29%20...%208%20Changing%20Elements%20...%20More%20items)
[COLOR RGBs](https://www.rapidtables.com/web/color/RGB_Color.html#:~:text=Basic%20colors%3A%20%20%20%20HTML%20%2F%20CSS,%20%20%280%2C255%2C0%29%20%2012%20more%20rows%20)
[AnimationFlipInX](https://animate.style/)