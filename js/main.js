import { Card } from "./card.js";
import { Game } from "./game.js";

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

const startButton = document.getElementById("start");
startButton.addEventListener("click", () => {
    game.start();
    
});