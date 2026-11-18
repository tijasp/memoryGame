import { UserInterface } from "./userInterface.js";

export class Game {
    constructor(cards) {
        this.cards = cards;
        this.ui = new UserInterface();
        this.flipped = [];
        this.moves = 0;
    };

    start() {
        // Creates cards in DOM.
        this.ui.render(this.cards);
        this.clickHandler();
    };

    clickHandler() {
        this.cards.forEach(card => {
            card.element.addEventListener("click", () => {
                console.log(card.element)
            });
        });
    };
};