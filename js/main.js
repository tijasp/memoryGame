class Card {
    constructor(name) {
        this.name = name;
        this.flipped = 0;
        this.isPairFound = false;
    };


};

const pairNames = ["c-plus", "c-sharp", "css", "html", "java", "js", "php", "python"];
const cards = pairNames.map(name => new Card(name));

console.log(cards)

const card = document.querySelectorAll(".card");
card.forEach(card => {
    card.addEventListener("click", () => {
        const imgs = card.querySelectorAll("img");
        imgs.forEach(img => {
            img.classList.toggle("hidden");
        });
    });
});