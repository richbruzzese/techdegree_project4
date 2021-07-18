/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor(){
        this.phrases = this.makePhrase();
        this.missed = 0
        this.activePhrase = null
    }
    /**
     * 
     * function @returns [] of Phrase objects to be randomly
     * selected and displayed on page
     */
    makePhrase(){
        let phraseList = [
            new Phrase('fear the old blood'),
            new Phrase('farewell good hunter'),
            new Phrase('hunters Dream'),
            new Phrase('bloodborne'),
            new Phrase('cathedral ward')
        ]
        return phraseList
    }
    
    get randomPhrase(){
        return this.getrandomPhrase()
    }
    /**
     * 
     * function @returns index of random phrase in array to generate when
     * game begins 
     */
    getrandomPhrase(){
        const randomPhrase = Math.floor(Math.random() * this.phrases.length)
        return this.phrases[randomPhrase]
    }

    /**
     * Start game function selects the currently active phrase
     * and runs the addPhraseToDisplay function from Phrase class
     */
    startGame(){
        overlay.style.display = 'none'
        overlay.className = 'start'
        this.activePhrase = this.randomPhrase
        this.randomPhrase.addPhraseToDisplay(this.activePhrase)
    }

    /**
     * 
     * @param {*} selectedLetter provided by user input
     * Function determines key selected, disables key, checks against active phrase, 
     * and will then determine whether a win or loss function has been met
     */
    handleInteraction(selectedLetter){ 
        let key; 
            qwertyLetter.forEach( (letter) =>{
            if(letter.textContent === selectedLetter){
                key = letter
            }
        })
        //Only to check against active phrase if key exists, and it is not disabled
        if(key && !key.disabled){
            key.disabled = true
            console.log("Letter = ", selectedLetter, "Key = ", key)
            if(this.activePhrase.checkLetter(selectedLetter) === true){
                key.classList.add('chosen')
                this.activePhrase.showMatchedLetter(selectedLetter)
                
                if(this.checkForWin() === true){
                this.gameOver(true)}
            }else{
                key.classList.add('wrong')
                this.removeLife()}  
        }
    }

    /**
     * removeLife will add one to the missed property and replace the image on the page
     * to indicate missed letter. If user misses 5 letters, game ends with a loss
     */
    removeLife(){
        heart[this.missed].src='images/missed.png'
        this.missed ++
        if(this.missed === 5){
        this.gameOver(false)}
    }
    /**
     * checkForWin function indicates the win condition by adding letters and spaces in active phrase
     * Used in handleInteraction to determine whether user has won the game
     * @returns boolean
     */
    checkForWin(){
        let phraseLength = this.activePhrase.phrase.length
        let foundLetters = document.querySelectorAll('li.show')
        let phraseSpaces = document.querySelectorAll('.space')
        let winCondition = foundLetters.length + phraseSpaces.length

        if(winCondition == phraseLength){
            return true
        }else{
            return false}
    }
    /**
     * 
     * @param {*} winOrLoss boolean value to determine end of game screen
     * When game ends:
     * - overlay enabled
     * - button text changed
     * - phrase reset
     * - missed counter reset
     * - heart icons replaced
     */
    gameOver(winOrLoss){
        overlay.style.display = 'flex'
        startButton.textContent = 'Play Again'
        phraseUl.innerHTML = ''
        this.missed = 0
        // For loop re-enables all disabled keys
       
        for(let i = 0; i<keys.length; i++){
            keys[i].classList = 'key'
            keys[i].disabled = false
        }
        
        heart.forEach((heart) =>{
            heart.src='images/active.png'
        })

        //If @param is true, display win screen. Else display loss

        if(winOrLoss === true){
        overlay.classList.replace('start', 'win')
        gameEndMsg.textContent = "Well done, Hunter."
        }else{
            overlay.classList.replace('start', 'lose')
            gameEndMsg.textContent = "Sorry, Try Again"
        }
        
    }
}
