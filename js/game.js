export class Game {
    constructor(cards) {
        this.cards = cards;
        this.moves = 0;
        this.freeze = false;
    };

    init() {
        this.cardClickHandler();
    }

    cardClickHandler() {
        const cardDiv = document.querySelectorAll(".card");
        cardDiv.forEach(card => {
            card.addEventListener("click", (e) => {
                const index = e.currentTarget.dataset.index;

                if (this.freeze) return;

                if (!this.cards[index].isMatched && !e.currentTarget.classList.contains("flipped")) {
                    this.cards[index].flip(card);
                    this.moves += 1;
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
            this.freeze = true;

            const flippedCards = document.querySelectorAll(".card.flipped");

            setTimeout(() => {
                flippedCards.forEach(card => {
                    card.classList.remove("flipped");
                    const index = card.dataset.index;

                    if (this.cards[index].isMatched) return;

                    this.cards[index].flippedCount = 0;
                    this.cards[index].hide(card);
                });

                this.freeze = false;
            }, 1000);
        };

        this.moves = 0;
    };
};