export class Card {
    constructor(name) {
        this.name = name;
        this.isFlipped = false;
        this.isMatched = false;
    };

    flip() {
        // Invert boolean value
        this.isFlipped = true ? false : true;
    };

    match() {
        this.isMatched = true;
    };
};