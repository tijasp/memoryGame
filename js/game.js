import { UserInterface } from "./userInterface.js";

export class Game {
    constructor(container, cards) {
        this.container = container;
        this.cards = cards;
        this.ui = new UserInterface(container, cards);
    };

    start() {
        this.ui.render(this.cards);
    };
};