import { Card } from "./card.js";

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

// Push 2 cards per pair name into "cards" array
pairs.forEach(pair => {
    for (let i = 0; i < 2; i++) {
        cards.push(new Card(pair));
    };
});

console.log(cards);