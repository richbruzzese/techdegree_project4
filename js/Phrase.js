/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase()
    }
    //Display phrase on page
    displayNewPhrase(phrase){
        const phraseUl = document.querySelector('#phrase ul')
        let letters = phrase.phrase.split('')
        letters.forEach((letter) =>{
            if(letter === ' '){
                phraseUl.insertAdjacentHTML('beforeend',
                `<li class= "space"> ${letter}</li>`)
            }else{
                phraseUl.insertAdjacentHTML('beforeend',
                `<li class="hide letter">${letter} `)

            }
        })
    }
}