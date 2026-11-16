export class Game {
    constructor(cards) {
        this.cards = cards;
        this.freeze = false;
        this.flippedCards = [];
    };

    init() {
        this.shuffle();
        this.cardClickHandler();
    };

    shuffle() {
        // Shuffle DOM with Fisher-Yates algorithm
        const cardSection = document.querySelector(".cardSection");

        let m = this.cards.length;
        while (m) {
            const i = Math.floor(Math.random() * m--);
            [this.cards[m], this.cards[i]] = [this.cards[i], this.cards[m]];
        }

        this.cards.forEach(item => cardSection.appendChild(item.element));
    };

    cardClickHandler() {
        // Add a "click" eventListener to all card of this.cards array
        this.cards.forEach(card => {
            card.element.addEventListener("click", () => {
                // Ignore if player is frozen or the clicked card is already flipped/matched
                if (this.freeze 
                    || card.isFlipped 
                    || card.isMatched) return;

                card.flip();
                // Save the flipped card in an Array
                this.flippedCards.push(card);

                // If 2 flipped cards in the Array, calls verifyMatch()
                if (this.flippedCards.length === 2) this.verifyMatch();
            });
        });
    };

    verifyMatch() {
        // Checks of the flipped cards have the same name
        if (this.flippedCards[0].name === this.flippedCards[1].name) {
            this.flippedCards.forEach(card => {
                card.match();
            })
            // Resets Array
            this.flippedCards = [];
        } else {
            this.badGuess();
        };
    };

    badGuess() {
        // Freeze player moves
        this.freeze = true

        // Add red borders to flipped cards
        this.flippedCards.forEach(card => {
            card.element.classList.add("wrong");
        })

        // After 1s: hide cards, removes the red borders and unfreeze player moves
        setTimeout(() => {
            this.flippedCards.forEach(card => {
                card.element.classList.remove("wrong");
                card.hide();
            })
            
            // Unfreeze player
            this.freeze = false;
            // Resets Array
            this.flippedCards = [];
        }, 1000);
    };

};