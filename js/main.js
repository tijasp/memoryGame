import { Card } from "./card.js";
import { Game } from "./game.js";

const pairNames = ["c-plus", "c-sharp", "css", "html", "java", "js", "php", "python"];
const game = new Game(pairNames.map(name => new Card(name)));

game.init();