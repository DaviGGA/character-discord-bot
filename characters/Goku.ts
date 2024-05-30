import { gokuPrompt } from "../prompts/goku-prompt";
import { Character } from "./Character";

export class Goku extends Character {
    
    private prompt;

    constructor() {
        super("Goku");
        this.prompt = gokuPrompt;
    }
    
    getPrompt(): string {
        return this.prompt;
    }

}