export class Game {
    constructor(cards) {
        this.cards = cards;
        this.tries = 0;
        this.freeze = false;
    };

    cardClickHandler() {
        this.cards.forEach(card => {
            card.element.addEventListener("click", () => {
                console.log("test")
            })
        });
    }
}