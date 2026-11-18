import { Card } from "./card.js";
import { Game } from "./game.js";

// Configure all pair names
const pairs = [
    "c-plus",
    "c-sharp",
    "css",
    "html",
    "java",
    "js",
    "php",
    "python"
];

const rootContainer = document.querySelector("main");
const cards = [];
const game = new Game(rootContainer, cards)

// Push 2 cards per pair name into "cards" array
pairs.forEach(pair => {
    for (let i = 0; i < 2; i++) {
        cards.push(new Card(pair));
    };
});

game.start(rootContainer, cards);