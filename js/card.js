export class Card {
    constructor(element) {
        this.element = element;
        this.img = element.querySelector("img")
        
        this.name = element.dataset.name;
        this.isFlipped = false;
        this.isMatched = false;
    };

    flip() {
        this.isFlipped = true;
        this.img.classList.remove("hidden");
        this.element.classList.add("flipped");
    };

    hide() {
        this.isFlipped = false;
        this.img.classList.add("hidden");
        this.element.classList.remove("flipped");
    };

    match() {
        this.isMatched = true;
        this.element.classList.add("matched");
    };
};