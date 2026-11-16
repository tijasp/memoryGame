export class Card {
    constructor(element) {
        this.element = element;
        
        this.name = element.dataset.name;
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