/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor(){
        this.phrases = this.makePhrase();
        this.missed = 0
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

    gameInteraction(){
        let qwertyLetter = document.querySelectorAll('#qwerty button')
        let selectedLetter = ''
        qwertyLetter.forEach(key =>{
            key.addEventListener('click', (e) =>{
                if(e.target.tagName === 'BUTTON'){
                    key.disabled = true
                    key.classList.add('chosen')
                    selectedLetter = e.target.textContent

                    if(this.activePhrase.checkLetter(selectedLetter) === true){
                        this.activePhrase.showLetter(selectedLetter)
                    }else{
                        this.loseLife()}
                    if(this.missed === 5)
                    this.gameOver(false)
                    if(this.checkForWin === true)
                    this.gameOver(true)    
                }
            })
        })   
    }

    loseLife(){
        let heart = document.querySelectorAll('.tries img')
        heart[this.missed].src='images/lostHeart.png'
        console.log('lose life')
        this.missed ++
    }
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
    gameOver(winOrLoss){
        let finalScreen = overlay
        finalScreen.style.display = 'flex'
        let gameEndMsg = document.getElementById('game-over-message')
        let srtbutton = document.getElementById('btn__reset')
        srtbutton.textContent = 'play again'
        let ul = document.getElementById('phrase')
        ul.innerHTML = ''
        

        if(winOrLoss === true){
        finalScreen.classList.replace('start', 'win')
        gameEndMsg.textContent = "yay"
        }else{
            finalScreen.classList.replace('start', 'lose')
            gameEndMsg.textContent = ":("
        }
        
    }
}


