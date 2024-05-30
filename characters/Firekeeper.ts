import { bocchiPrompt } from "../prompts/bocchi-prompt";
import { firekeeperPrompt } from "../prompts/firekeeper-prompt";
import { Character } from "./Character";

export class Firekeeper extends Character {
    
    private prompt;


    constructor() {
        super("firekeeper");
        this.prompt = firekeeperPrompt;
    }
    
    getPrompt(): string {
        return this.prompt;
    }

}