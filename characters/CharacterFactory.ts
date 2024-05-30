import { Bocchi } from "./Bocchi";
import { Character } from "./Character";
import { Firekeeper } from "./Firekeeper";
import { Goku } from "./Goku";
import { Liber } from "./Liber";

export class CharacterFactory {

    static createCharacter(charcaterName: string): Character {
        if (charcaterName == "liber") return new Liber();
        if (charcaterName == "bocchi") return new Bocchi();
        if (charcaterName == "goku") return new Goku();
        if (charcaterName == "firekeeper") return new Firekeeper();

        throw new Error("Invalid character")
    }

}