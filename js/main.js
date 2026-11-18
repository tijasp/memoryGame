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

const cards = [];
const game = new Game(cards)

// Push 2 cards per pair name into "cards" array
pairs.forEach(pair => {
    for (let i = 0; i < 2; i++) {
        cards.push(new Card(pair));
    };
});

game.start();