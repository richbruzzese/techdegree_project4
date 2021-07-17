/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const keys = document.querySelectorAll('.key')
const qwerty = document.querySelector('#qwerty')
const hearts = document.querySelector('#scoreboard')
const startButton = document.getElementById('btn__reset')
const overlay = document.getElementById('overlay')


const game = new Game();
game.startGame();
game.gameInteraction();



