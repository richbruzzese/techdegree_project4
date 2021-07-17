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
     * @param {*} letter 
     * @returns 
     */
    checkLetter (letter){
        return this.phrase.includes(letter);
    }
    showMatchedLetter(letter){
        let rightLetter = document.getElementsByClassName(letter)
        for(let i = 0 ; i <rightLetter.length; i++){
            rightLetter[i].classList.replace('hide', 'show')
        }
    }
   
}