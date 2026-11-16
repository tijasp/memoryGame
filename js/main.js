import { Card } from "./card.js";
import { Game } from "./game.js";

const cardDivs = document.querySelectorAll(".card");

const cards = Array.from(cardDivs).map((element) => { return new Card(element) });
const game = new Game(cards);

game.init()