import { Card } from "./card.js";

const cardDivs = document.querySelectorAll(".card")

const cards = Array.from(cardDivs).map((element) => {
    return new Card(element)
})

console.log(cards)