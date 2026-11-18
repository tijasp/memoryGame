import { UserInterface } from "./userInterface.js";

export class Game {
    constructor(container, cards) {
        this.container = container;
        this.cards = cards;
        this.ui = new UserInterface(container);
    };

    start() {
        this.ui.render(this.cards);
        console.log(this.cards);
    };
};