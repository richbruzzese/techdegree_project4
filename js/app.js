/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/**
 * 
 */
const keys = document.querySelectorAll('.key')
const hearts = document.querySelector('#scoreboard')
const startButton = document.getElementById('btn__reset')
const overlay = document.getElementById('overlay')
const gameEndMsg = document.getElementById('game-over-message')
const phraseUl = document.querySelector('#phrase ul')
const heart = document.querySelectorAll('.tries img')
const qwertyLetter = document.querySelectorAll('#qwerty button')
const letters = document.querySelector('#qwerty')

//
const game = new Game();

startButton.addEventListener('click', () =>{
    overlay.style.display = 'none'
    overlay.className = 'start'
    console.log('game started');
    game.startGame();    
})

qwertyLetter.forEach(key => {
    key.addEventListener('click', (e) =>{
        if(e.target.tagName === 'BUTTON'){
            key.disabled = true
            game.handleInteraction(e.target.textContent, key)
        }
    })
})
