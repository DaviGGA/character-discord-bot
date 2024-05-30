export abstract class Character {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract getPrompt(): string;

    getName(): string {
        return this.name;
    }
}