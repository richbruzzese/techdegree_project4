/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/**
 * Variables for DOM elements used within Phrase and Game Class
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


//Event listener for start button.  Once clicked, calls the start game method
startButton.addEventListener('click', () =>{
    const game = new Game();
    game.startGame();

    /**
 * Event Listeners for click and keydown events.  Will only allow input if the overlay 
 * is not displayed.
 */  

    letters.addEventListener('click', (e) =>{

            if(e.target.tagName === 'BUTTON'){
            if(overlay.style.display == 'none'){
                game.handleInteraction(e.target.textContent)
                }
             }
        })
    
    
    window.addEventListener('keydown', (e)=>{
        if(overlay.style.display == 'none'){
        game.handleInteraction(e.key)
        }

    })
})