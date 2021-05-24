/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }

    addPhraseToDisplay() {
        const randomPhrase = game.getRandomPhrase();
        const lettersArr = randomPhrase.split("");
        const lettersArrLength = lettersArr.length;

        //DOM
        const phraseDiv = document.getElementById("phrase");
        const phraseUl = phraseDiv.firstElementChild;
        
        
        function createList() {
            const createLi = document.createElement("li");
            phraseUl.appendChild(createLi);
        }
        
        for (let i = 0; i <= lettersArrLength; i++) {
            createList();
        }
        
        
        //iterate through letters array and create list elements
        //for each letter/spaces in array.
        // lettersArr.forEach(letter => {
            
        // });
        
        
    }

    checkLetter() {

    }

    showMatchedLetter() {

    }
}