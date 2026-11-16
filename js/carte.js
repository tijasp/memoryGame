export class Carte {
    constructor(element) {
        this.element = element;
        
        this.nom = element.dataset.index;
        this.estTourne = false;
        this.estTrouve = false;
    };

    flip() {
        this.estTourne = true;
    };

    hide() {
        this.estTourne = false;
    };

    match() {
        this.estTrouve = true;
    };
};