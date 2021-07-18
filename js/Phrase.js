/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase()
    }
    //Display phrase on page
    addPhraseToDisplay(phrase){
        let phraseletters = phrase.phrase.split('')
        phraseletters.forEach((letter) =>{
            if(letter === ' '){
                phraseUl.insertAdjacentHTML('beforeend',
                `<li class= "space"> ${letter}</li>`)
            }else{
                phraseUl.insertAdjacentHTML('beforeend',
                `<li class="hide letter ${letter}">${letter} `)

            }
        })
        
    }
    /**
     * 
     * @param {*} letter chosen on qwerty display or keyboard to be checked
     * @returns boolean
     */
    checkLetter (letter){
        console.log(letter)
        return this.phrase.includes(letter);
    }
    /**
     * 
     * @param {*} letter chosen on qwerty display or keyboard is found in the active phrase
     * all instances of letter displayed by replacing hide class with show.
     */
    showMatchedLetter(letter){
        let rightLetter = document.getElementsByClassName(letter)
        for(let i = 0 ; i <rightLetter.length; i++){
            rightLetter[i].classList.replace('hide', 'show')
        }
    }
   
}