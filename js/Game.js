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
        this.activePhrase = phrase;
    }

    startGame() {
        const screenOverlay = document.getElementById("overlay");
        const overlayHide = screenOverlay.style.display = "none";
        game.getRandomPhrase();
        phrase.addPhraseToDisplay();
    }

    getRandomPhrase() {
        const randomNumber = Math.floor((Math.random() * 5));
        return game.phrases[randomNumber].phrase;
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