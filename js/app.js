/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const startButton = document.getElementById('#btn__reset')
// const overlay = document.getElementById('#overlay')
const keys = document.querySelectorAll('.key')
const qwerty = document.querySelector('#qwerty')
const hearts = document.querySelector('#scoreboard')

const game = new Game();
game.startGame();



game.gameInteraction();


/**
 * add event listener for the qwerty keys on the page.  target needs to be the button
 * was selected can then handle the game function of disabling the letter on the page
 * and checking for a correct or incorrect selection
 */

