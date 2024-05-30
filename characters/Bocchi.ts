import { bocchiPrompt } from "../prompts/bocchi-prompt";
import { Character } from "./Character";

export class Bocchi extends Character {
    
    private prompt;


    constructor() {
        super("Bocchi");
        this.prompt = bocchiPrompt;
    }
    
    getPrompt(): string {
        return this.prompt;
    }

}