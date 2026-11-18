export class UserInterface {
    constructor(container) {
        this.container = container;
    };

    render(cards) {
        cards.forEach(card => {
            card.element = document.createElement("div");
            card.element.classList.add("card");
            card.element.innerHTML = `<img class="hidden" src="../assets/${card.name}.webp">`;
            document.getElementById("cardSection").append(card.element);
        });
    };
};