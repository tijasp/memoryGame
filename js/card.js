export class Card {
    constructor(name) {
        this.name = name;
        this.flippedCount = 0;
        this.isMatched = false;
    };

    flip(element) {
        const img = element.querySelector("img");

        img.classList.remove("hidden");
        element.classList.add("flipped");
        this.flippedCount += 1;
    };

    hide(element) {
        const img = element.querySelector("img");

        img.classList.add("hidden");
        element.classList.remove("flipped");
        this.flippedCount = 0;
    };

    match(index) {
        this.isMatched = true;

        const matchedPair = document.querySelectorAll(`.card[data-index="${index}"]`)
        matchedPair.forEach(card => {
            card.classList.add("matched")
        })
    };
};