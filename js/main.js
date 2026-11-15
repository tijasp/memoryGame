class Card {
    constructor(name) {
        this.name = name;
        this.flipped = 0;
        this.isPairFound = false;
    };

    flip(element) {
        const imgs = element.querySelectorAll("img");
        imgs.forEach(img => {
            img.classList.toggle("hidden");
        });
    };

};

const pairNames = ["c-plus", "c-sharp", "css", "html", "java", "js", "php", "python"];
const cards = pairNames.map(name => new Card(name));

const cardDiv = document.querySelectorAll(".card");

cardDiv.forEach(card => {
    card.addEventListener("click", (e) => {

        console.log("Card flipped: ", cards[e.currentTarget.dataset.index])
        cards[e.currentTarget.dataset.index].flip(card)

        console.log(cards)

        
    });
});