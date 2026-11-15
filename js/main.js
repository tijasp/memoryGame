class Card {
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
        const matchedPair = document.querySelectorAll(`.card[data-set='${index}']`)
        console.log(matchedPair)
    };
};

class Game {
    constructor(cards) {
        this.cards = cards;
        this.moves = 0;
    };

    init() {
        this.cardClickHandler();
    }

    cardClickHandler() {
        const cardDiv = document.querySelectorAll(".card");
        cardDiv.forEach(card => {
            card.addEventListener("click", (e) => {
                const index = e.currentTarget.dataset.index;
                if (!this.cards[index].isMatched && !e.currentTarget.classList.contains("flipped")) {
                    this.cards[index].flip(card);
                    this.moves += 1;
                    console.log(this.moves)
                };

                if (this.moves === 2) this.checkIfMatched(index);
            });
        });
    };

    checkIfMatched(index) {
        if (this.cards[index].flippedCount === 2) {
            this.cards[index].match(index);
            console.log("congrats !");
        } else {
            const flippedCards = document.querySelectorAll(".card.flipped");
            flippedCards.forEach(card => {
                card.classList.remove("flipped");
                const index = card.dataset.index;
                if (this.cards[index].isMatched) return;
                this.cards[index].flippedCount = 0;
                this.cards[index].hide(card);
            });
        };
        this.moves = 0;
    };
};

const pairNames = ["c-plus", "c-sharp", "css", "html", "java", "js", "php", "python"];
const game = new Game(pairNames.map(name => new Card(name)));

game.init();