import { liberPrompt } from "../prompts/liber-prompt";
import { Character } from "./Character";

export class Liber extends Character {
    prompt: string;

    constructor() {
        super("Liber");
        this.prompt = liberPrompt;
    }

    getPrompt(): string {
        return this.prompt;
    }



}