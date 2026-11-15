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
        this.cardClickHandler()
    }

    cardClickHandler() {
        const cardDiv = document.querySelectorAll(".card");
        cardDiv.forEach(card => {
            card.addEventListener("click", (e) => {
                if (e.currentTarget.classList.contains("flipped")) return;
                e.currentTarget.classList.add("flipped");

                const index = e.currentTarget.dataset.index;
                this.cards[index].flip(card);
                this.moves += 1;
                if (this.moves === 2) this.checkIfMatched();
            });
        });

    };

    checkIfMatched() {
        
    };


};

const pairNames = ["c-plus", "c-sharp", "css", "html", "java", "js", "php", "python"];
const game = new Game(pairNames.map(name => new Card(name)))

game.init()