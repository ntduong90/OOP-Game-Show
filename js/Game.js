/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            {
                phrase: "dang",
            },

            {
                phrase: "echo got skinny knees",
            },

            {
                phrase: "im so hungry",
            },

            {
                phrase: "that took a while",
            },

            {
                phrase: "did you forget"
            }
            
        ];
        this.activePhrase = null;
    }

    getRandomPhrase() {
        const randomNumber = Math.floor((Math.random() * 5));
        return game.phrases[randomNumber];
    }

    startGame() {
        document.getElementById("overlay").style.display = "none";
        this.activePhrase = game.getRandomPhrase();
        phrase.addPhraseToDisplay();
        
        
        
        
        
    }

    handleInteraction() {

    }

    removeLife() {

    }

    checkForWin() {

    }

    gameOver() {

    }
}