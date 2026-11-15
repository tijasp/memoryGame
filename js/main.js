class Card {
    constructor(name) {
        this.name = name;
        this.flipped = 0;
        this.isMatched = false;
    };

    flip(element) {
        const img = element.querySelector("img");
        img.classList.remove("hidden");
    };

    hide(element) {
        const img = element.querySelector("img");
        img.classList.add("hidden");
    };

    match() {

    };
};

class Game {
    constructor(cards) {
        this.cards = cards;
        this.moves = 0;
    };

    init() {
        this.cardClick()
    }

    cardClick() {
        const cardDiv = document.querySelectorAll(".card");
        cardDiv.forEach(card => {
            card.addEventListener("click", (e) => {

                console.log("Card flipped: ", cards[e.currentTarget.dataset.index])
                cards[e.currentTarget.dataset.index].flip(card)

                console.log("Card Array: ", cards)
            });
        });

    };
};

const pairNames = ["c-plus", "c-sharp", "css", "html", "java", "js", "php", "python"];
const cards = pairNames.map(name => new Card(name));

const game = new Game(pairNames.map(name => new Card(name)))
game.init()