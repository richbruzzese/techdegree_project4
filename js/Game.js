/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor(){
        this.phrases = this.makePhrase();
        this.missed = 4
        this.activePhrase = null
    }
    makePhrase(){
        let phraseList = [
            new Phrase('Hello There'),
            new Phrase('I ATE THEM')
        ]
        return phraseList
    }
    get randomPhrase(){
        return this.getrandomPhrase()
    }

    getrandomPhrase(){
        const randomPhrase = Math.floor(Math.random() * this.phrases.length)
        return this.phrases[randomPhrase]
    }
    startGame(){
        const startButton = document.getElementById('btn__reset')
        const overlay = document.getElementById('overlay')

        startButton.addEventListener('click', () =>{
        overlay.style.display = 'none'
        console.log('game started');
        })
        this.activePhrase = this.randomPhrase
        this.randomPhrase.displayNewPhrase(this.activePhrase)
    }
}

