/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const startButton = document.getElementById('btn__reset')
// const overlay = document.getElementById('overlay')

// startButton.addEventListener('click', () =>{
//     overlay.style.display = 'none'
//     console.log('game started');
// })

const game = new Game();
game.startGame();

/**
 * add event listener for the qwerty keys on the page.  target needs to be the button
 * was selected can then handle the game function of disabling the letter on the page
 * and checking for a correct or incorrect selection
 */