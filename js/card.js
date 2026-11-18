export class Card {
    constructor(name) {
        this.name = name;        
        this.isFlipped = false;
        this.isMatched = false;
    };

    flip() {
        this.isFlipped = true;
    };

    hide() {
        this.isFlipped = false;
    };

    match() {
        this.isMatched = true;
    };
};