/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor(){
        this.phrases = this.makePhrase();
        this.incorrectGuess = 0
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
    /**
     * create method to handle what happens when a letter is chosen.
     * Disable target selection to avoid duplicate selections
     * var to find letter selected
     * 
     * Check if(letter select === letter in phrase){
     *          If true, unhide all matches.
     *      }else{
     *      remove a heart container and add one to incorrectGuess
     *      
     * } then check if a win or loss condition has been met.
     * 
     * 
     * create method to end the game
     * 
     * 
     * if win. Method will enable overlay and display a winning message
     * start button will be added back to page to allow player to play again
     * 
     * if loss.  Method will enable overlay and display loss message
     * start button will be added back to page to allow player 
     * 
     * 
     */
}

