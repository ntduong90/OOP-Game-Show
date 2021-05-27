/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }

    addPhraseToDisplay() {
        const randomPhrase = game.activePhrase.phrase;
        const lettersArr = randomPhrase.split("");
        const phraseDiv = document.getElementById("phrase");
        const phraseUl = phraseDiv.firstElementChild;
        
        lettersArr.forEach(letter => {
            
            const createLi = document.createElement("li");
            const createdLi = phraseUl.appendChild(createLi); 
            
            if (letter === " ") {
                createdLi.className = "space";
            } else {
                createdLi.className = `hide letter ${letter}`;
                createdLi.textContent = `${letter}`;
            }
              
        })   
    }

    checkLetter() {

    }

    showMatchedLetter() {

    }
}