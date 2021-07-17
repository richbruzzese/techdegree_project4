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
     * @param makePhrase @returns [] of Phrase objects 
     */
    makePhrase(){
        let phraseList = [
            new Phrase('Eat your heart out Vanna White'),
            new Phrase('You are filled with determination'),
            new Phrase('Memories of Crono'),
            new Phrase('Acquatic Ambience'),
            new Phrase('Ride Ze Shoopuff')
        ]
        return phraseList
    }
    //
    get randomPhrase(){
        return this.getrandomPhrase()
    }
    /**
     * 
     * @returns 
     */
    getrandomPhrase(){
        const randomPhrase = Math.floor(Math.random() * this.phrases.length)
        return this.phrases[randomPhrase]
    }

    /**
     * 
     */
    startGame(){
        this.activePhrase = this.randomPhrase
        this.randomPhrase.addPhraseToDisplay(this.activePhrase)
    }

    /**
     * 
     */
    handleInteraction(selectedLetter, key){
                    if(this.activePhrase.checkLetter(selectedLetter) === true){
                        key.classList.add('chosen')
                        this.activePhrase.showMatchedLetter(selectedLetter)
                        
                        if(this.checkForWin() === true){
                        this.gameOver(true)}
                    }else{
                        key.classList.add('wrong')
                        this.removeLife()}  
    }

    /**
     * 
     */
    removeLife(){
        heart[this.missed].src='images/lostHeart.png'
        this.missed ++
        if(this.missed === 5){
        this.gameOver(false)}
    }
    /**
     * 
     * @returns 
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
     * @param {*} winOrLoss 
     */
    gameOver(winOrLoss){
        overlay.style.display = 'flex'
        startButton.textContent = 'Play Again'
        phraseUl.innerHTML = ''
        this.missed = 0
        for(let i = 0; i<keys.length; i++){
            keys[i].classList = 'key'
            keys[i].disabled = false
        }
        

        if(winOrLoss === true){
        overlay.classList.replace('start', 'win')
        gameEndMsg.textContent = "You Did It!"
        }else{
            overlay.classList.replace('start', 'lose')
            gameEndMsg.textContent = "Sorry, Try Again"
        }
        
    }
}
